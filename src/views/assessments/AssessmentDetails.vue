<template>
  <div>
    <h3>{{assessment.name}} > Breakdown</h3>
    <svg width="800" height="150">
      <line x1="100" x2="700" y1="75" y2="75" stroke="gray" />

      <g :transform="translateAchievement">
        <text text-anchor="middle" y="20">Achievement</text>
        <extra-info-icon-svg y="0" x="50" />
        <circle cy="75" r="40" fill="#ddd" />
        <text text-anchor="middle" y="75">{{assessment.breakdown.achievement}}</text>
      </g>
    </svg>
    <svg width="800" height="150">
      <line x1="100" x2="700" y1="75" y2="75" stroke="gray" />

      <g :transform="translateGrowth">
        <text text-anchor="middle" y="20">Growth</text>
        <extra-info-icon-svg y="0" x="32" />
        <circle cy="75" r="40" fill="#ddd" />
        <text text-anchor="middle" y="75">{{assessment.breakdown.growth}}</text>
      </g>
    </svg>

    <h4>Scores by Topic</h4>
    <svg width="800" height="400">
      <line x1="50" x2="50" y1="50" y2="350" stroke="gray" />
      <line x1="50" x2="700" y1="350" y2="350" stroke="gray" />
      <rect
        v-for="(t, i) in assessment.breakdown.topics"
        :key="i"
        :x="barScaleX(i)"
        :y="barScaleY(t.score)"
        :height="350-barScaleY(t.score)"
        :width="barScaleX.bandwidth()"
      />
    </svg>

    <bottom-navigation
      backText="Back to the Overview"
      :backRoute="assessmentOverviewRoute"
      nextText="See a Detailed Score Table"
      :nextRoute="assessmentDetailsTableRoute"
    />

    <div class="spacer" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as d3 from "d3";

import BottomNavigation from "@/components/layout/BottomNavigation";
import ExtraInfoIconSvg from "@/components/inform/ExtraInfoIconSvg";

export default {
  components: { BottomNavigation, ExtraInfoIconSvg },
  props: ["assessmentId"],
  data() {
    return {
      lineScale: null,
      barScaleX: null,
      barScaleY: null
    };
  },
  created() {
    this.lineScale = d3
      .scaleLinear()
      .domain([0, 100])
      .rangeRound([100, 700]);

    this.barScaleX = d3
      .scaleBand()
      .domain([0, 1, 2, 3])
      .rangeRound([100, 700])
      .padding(0.4);

    this.barScaleY = d3
      .scaleLinear()
      .domain([0, 100])
      .rangeRound([350, 50]);
  },
  computed: {
    ...mapGetters("assessment", ["getAssessment"]),
    ...mapGetters("student", { student: "getStudent" }),
    assessment() {
      return this.getAssessment(this.assessmentId);
    },
    assessmentOverviewRoute() {
      return {
        name: "assessment-overview",
        params: { assessmentId: this.assessmentId }
      };
    },
    assessmentDetailsTableRoute() {
      return {
        name: "assessment-details-table",
        params: { assessmentId: this.assessmentId }
      };
    },
    translateAchievement() {
      let x = this.lineScale(this.assessment.breakdown.achievement);
      return `translate(${x}, 0)`;
    },
    translateGrowth() {
      let x = this.lineScale(this.assessment.breakdown.growth);
      return `translate(${x}, 0)`;
    }
  }
};
</script>

<style scoped>
</style>