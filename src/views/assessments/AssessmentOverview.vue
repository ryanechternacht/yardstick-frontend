<template>
  <div>
    <h3>{{assessment.name}}</h3>
    <svg width="800" height="400">
      <line x1="100" x2="700" y1="100" y2="100" stroke-width="1" stroke="gray" />
      <line
        :x1="scale(assessment.result.average)"
        :x2="scale(assessment.result.average)"
        y1="50"
        y2="150"
        stroke-width="1"
        stroke="gray"
      />
      <circle cy="100" :cx="scale(assessment.result.score)" r="10" fill="red" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as d3 from "d3";

export default {
  props: ["assessmentId"],
  data() {
    return {
      scale: null
    };
  },
  created() {
    this.scale = d3
      .scaleLinear()
      .domain([this.assessment.result.minimum, this.assessment.result.maximum])
      .rangeRound([100, 700]);
  },
  computed: {
    ...mapGetters("assessment", ["getAssessment"]),
    assessment() {
      return this.getAssessment(this.assessmentId);
    }
  }
};
</script>

<style>
</style>