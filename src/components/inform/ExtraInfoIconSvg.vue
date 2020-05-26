<template>
  <!-- <rect x="100" y="100" height="50" width="50" fill="red"></rect> -->
  <g :transform="translate">
    <!-- <rect height="50" width="50" fill="red" /> -->
    <circle cx="10" cy="10" r="10" class="primary-color" />
    <text x="10" y="16" text-anchor="middle" stroke="transparent" fill="white" font-style="italic">i</text>
  </g>
</template>

<script>
export default {
  name: "extra-info-icon-svg",
  props: ["x", "y"],
  computed: {
    translate() {
      let x = this.x ?? 0;
      let y = this.y ?? 0;
      return `translate(${x}, ${y})`;
    }
  }
};
</script>

<style scoped lang="scss">
@use "sass:map";
@import "@/assets/yardstick.scss";

.primary-color {
  fill: map.get($theme-colors, "primary");
}
</style>