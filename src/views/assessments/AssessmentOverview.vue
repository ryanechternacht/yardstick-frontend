<template>
  <div>
    <h3>{{assessment.name}}</h3>
    <svg width="800" height="200">
      <line x1="100" x2="700" y1="100" y2="100" stroke="gray" />
      <line
        :x1="scale(assessment.overview.average)"
        :x2="scale(assessment.overview.average)"
        y1="50"
        y2="150"
        stroke="gray"
      />
      <circle cy="100" :cx="scale(assessment.overview.score)" r="20" fill="#ddd" />
    </svg>

    <h4>{{student.name}}'s progress over time</h4>
    <svg width="800" height="400">
      <line x1="50" x2="50" y1="50" y2="350" stroke="gray" />
      <line x1="50" x2="700" y1="350" y2="350" stroke="gray" />

      <!-- TODO use an actual line -->
      <circle
        v-for="(s, i) in assessment.results.scores"
        :key="i"
        :cx="scale2x(i)"
        :cy="scale2y(s)"
        r="5"
        fill="black"
      />
    </svg>

    <div class="center-align pointer" @click="openBreakdown()">
      <div>See More {{assessment.name}} Information</div>
      <div>v</div>
    </div>

    <div class="spacer" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as d3 from "d3";

export default {
  props: ["assessmentId"],
  data() {
    return {
      scale: null,
      scale2: null
    };
  },
  created() {
    this.scale = d3
      .scaleLinear()
      .domain([
        this.assessment.overview.minimum,
        this.assessment.overview.maximum
      ])
      .rangeRound([100, 700]);

    this.scale2x = d3
      .scaleBand()
      .domain([0, 1, 2, 3, 4, 5])
      .rangeRound([100, 700]);

    this.scale2y = d3
      .scaleLinear()
      .domain([
        this.assessment.results.minimum,
        this.assessment.results.maximum
      ])
      .rangeRound([350, 50]);
  },
  computed: {
    ...mapGetters("assessment", ["getAssessment"]),
    ...mapGetters("student", { student: "getStudent" }),
    assessment() {
      return this.getAssessment(this.assessmentId);
    }
  },
  methods: {
    openBreakdown() {
      this.$router.push({
        name: "assessment-details",
        params: { assessmentId: this.assessmentId }
      });
    }
  }
};
</script>

<style>
.center-align {
  text-align: center;
}

.pointer {
  cursor: pointer;
}

.spacer {
  height: 50px;
}
</style>