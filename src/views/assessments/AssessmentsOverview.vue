<template>
  <div>
    <h3>Assessments page</h3>

    <svg width="800" height="400">
      <text
        v-for="h in headerRow"
        :key="h.value"
        :x="xScale(h.value) + columnCenter"
        :y="yScale('header')"
        text-anchor="middle"
      >{{h.display}}</text>

      <g
        v-for="(a, i) in assessments"
        :key="a.name"
        :transform="translate(xScale(a.status), yScale(i))"
        @click="openAssessment(a.id)"
      >
        <rect :width="xScale.bandwidth()" height="30" fill="#eee" class="pointer" />
        <text y="20" :x="columnCenter" text-anchor="middle" class="pointer">{{a.name}}</text>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      xScale: null,
      yScale: null,
      headerRow: [
        { value: "off-track", display: "Off Track" },
        { value: "at-risk", display: "At Risk" },
        { value: "likely-on-track", display: "Likely on Track" },
        { value: "on-track", display: "On Track" },
        { value: "advanced", display: "Advanced" }
      ]
    };
  },
  created() {
    let headerValues = this._.map(this.headerRow, "value");
    this.xScale = d3
      .scaleBand()
      .domain(headerValues)
      .rangeRound([50, 750]);

    let rows = this._.concat(
      ["header"],
      this._.map(this.assessments, (a, i) => i)
    );
    this.yScale = d3
      .scaleBand()
      .domain(rows)
      .rangeRound([50, 350]);

    this.updateBreadcrumbs({
      breadcrumbs: [
        {
          text: "Assessments",
          active: true
        }
      ]
    });
  },
  computed: {
    columnCenter() {
      return this.xScale.bandwidth() / 2;
    },
    ...mapGetters("assessment", { assessments: "getOverview" })
  },
  methods: {
    translate(x, y) {
      return `translate(${x}, ${y})`;
    },
    openAssessment(id) {
      this.$router.push({
        name: "assessment-overview",
        params: { assessmentId: id }
      });
    },
    ...mapActions("breadcrumbs", ["updateBreadcrumbs"])
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>