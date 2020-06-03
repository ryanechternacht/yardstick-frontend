<template>
  <div>suggested supports</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.updateBreadcrumbs({
      breadcrumbs: [
        {
          text: "How to Help",
          active: true
        },
        {
          text: "Strengths",
          to: { name: "relative-strengths" }
        },
        {
          text: "Weaknesses",
          to: { name: "relative-weaknesses" }
        },
        {
          text: "Suggested Supports",
          active: true
        }
      ]
    });
  },
  methods: {
    ...mapActions("breadcrumbs", ["updateBreadcrumbs"])
  }
};
</script>

<style>
</style>