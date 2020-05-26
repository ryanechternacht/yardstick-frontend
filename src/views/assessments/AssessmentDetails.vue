<template>
  <div>
    <h3>{{assessment.name}} > Breakdown</h3>
    <svg width="800" height="150">
      <line x1="100" x2="700" y1="75" y2="75" stroke="gray" />
      <circle cy="75" :cx="lineScale(assessment.breakdown.achievement)" r="40" fill="#ddd" />
      <text
        text-anchor="middle"
        y="75"
        :x="lineScale(assessment.breakdown.achievement)"
      >{{assessment.breakdown.achievement}}</text>
      <text
        text-anchor="middle"
        y="20"
        :x="lineScale(assessment.breakdown.achievement)"
      >Achievement</text>
    </svg>
    <svg width="800" height="150">
      <line x1="100" x2="700" y1="75" y2="75" stroke="gray" />
      <circle cy="75" :cx="lineScale(assessment.breakdown.growth)" r="40" fill="#ddd" />
      <text
        text-anchor="middle"
        y="75"
        :x="lineScale(assessment.breakdown.growth)"
      >{{assessment.breakdown.growth}}</text>
      <text text-anchor="middle" y="20" :x="lineScale(assessment.breakdown.growth)">Growth</text>
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

export default {
  components: { BottomNavigation },
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
    }
  }
};
</script>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-evenly;
}

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