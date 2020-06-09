<template>
  <div>
    <h3>{{assessment.name}} > Breakdown</h3>
    <tetherball-chart label="Achievement" :val="assessment.breakdown.achievement" />

    <tetherball-chart label="Growth" :val="assessment.breakdown.growth" />

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

import TetherballChart from "@/components/assessments/charts/TetherballChart";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default {
  components: { BottomNavigation, TetherballChart },
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