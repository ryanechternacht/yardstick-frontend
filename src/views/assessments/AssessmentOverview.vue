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
      <g :transform="achievementScoreTranslate">
        <circle r="40" fill="#ddd" />
        <text text-anchor="middle" y="5">{{assessment.overview.score}}</text>
        <extra-info-icon-svg x="15" y="-20" />
      </g>
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

    <bottom-navigation
      :nextText="assessmentBreakdownNavigationText"
      :nextRoute="assessmentBreakdownRoute"
    />

    <div class="spacer" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as d3 from "d3";

import BottomNavigation from "@/components/layout/BottomNavigation";
import ExtraInfoIconSvg from "@/components/inform/ExtraInfoIconSvg";

export default {
  components: { BottomNavigation, ExtraInfoIconSvg },
  props: ["assessmentId"],
  data() {
    return {
      scale: null,
      scale2x: null,
      scale2y: null
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

    this.updateBreadcrumbs({
      breadcrumbs: [
        {
          text: "Assessments",
          to: { name: "assessments" }
        },
        {
          text: this.assessment.name,
          active: true
        }
      ]
    });
  },
  computed: {
    ...mapGetters("assessment", ["getAssessment"]),
    ...mapGetters("student", { student: "getStudent" }),
    assessment() {
      return this.getAssessment(this.assessmentId);
    },
    assessmentBreakdownRoute() {
      return {
        name: "assessment-details",
        params: { assessmentId: this.assessmentId }
      };
    },
    assessmentBreakdownNavigationText() {
      return `See More ${this.assessment.name} Information`;
    },
    achievementScoreTranslate() {
      let x = this.scale(this.assessment.overview.score);
      return `translate(${x}, 100)`;
    }
  },
  methods: {
    ...mapActions("breadcrumbs", ["updateBreadcrumbs"])
  }
};
</script>

<style scoped>
</style>