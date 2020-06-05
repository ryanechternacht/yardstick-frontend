<template>
  <div>
    <h3>Suggested Supports</h3>

    <div class="spacer" />

    <div class="center-align">
      <b-button
        variant="secondary"
      >Keep Exploring How {{student.name}} is Doing across All of {{student.demographic.possessivePronoun}} Assessments</b-button>
    </div>

    <div class="spacer" />

    <div v-for="s in supports" :key="s.id">
      <suggested-support :support="s" />
      <div class="spacer" />
    </div>

    <bottom-navigation
      backText="Head Back to Areas for Growth"
      :backRoute="relativeWeaknessesRoute"
    />

    <div class="spacer" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SuggestedSupport from "@/components/how-to-help/suggested-supports/SuggestedSupport";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default {
  components: { SuggestedSupport, BottomNavigation },

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
  computed: {
    ...mapGetters("student", { student: "getStudent" }),
    ...mapGetters("howToHelp", { supports: "getSupports" }),
    relativeWeaknessesRoute() {
      return {
        name: "relative-weaknesses"
      };
    }
  },
  methods: {
    ...mapActions("breadcrumbs", ["updateBreadcrumbs"])
  }
};
</script>

<style scoped>
.center-align {
  text-align: center;
}
</style>