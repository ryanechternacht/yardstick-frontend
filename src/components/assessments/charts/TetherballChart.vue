<template>
  <svg width="800" :height="computedHeight">
    <line x1="100" x2="700" :y1="middleLine" :y2="middleLine" stroke="gray" />

    <g :transform="translate">
      <text text-anchor="middle" :y="middleLine-60">{{label}}</text>
      <extra-info-icon-svg :y="middleLine-75" x="50" />
      <circle :cy="middleLine" r="40" fill="#ddd" />
      <text text-anchor="middle" :y="middleLine">{{val}}</text>
    </g>
  </svg>
</template>

<script>
import * as d3 from "d3";

import ExtraInfoIconSvg from "@/components/inform/ExtraInfoIconSvg";

export default {
  name: "tetherball-chart",
  components: { ExtraInfoIconSvg },
  props: ["val", "min", "max", "height", "label"],
  created() {
    this.lineScale = d3
      .scaleLinear()
      .domain([this.computedMin, this.computedMax])
      .rangeRound([100, 700]);
  },
  computed: {
    translate() {
      let x = this.lineScale(this.val);
      return `translate(${x}, 0)`;
    },
    computedHeight() {
      return this.height || 150;
    },
    computedMin() {
      return this.min || 0;
    },
    computedMax() {
      return this.max || 100;
    },
    middleLine() {
      return this.computedHeight / 2;
    }
  }
};
</script>

<style>
</style>