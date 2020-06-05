<template>
  <div>
    <h3>Relative Strengths</h3>

    <div class="spacer" />

    <div id="strengths">
      <relative-strength v-for="(s, i) in strengths" :strength="s" :key="i" />
    </div>

    <div class="spacer" />

    <bottom-navigation nextText="Click to See More" :nextRoute="relativeWeaknessesRoute" />

    <div class="spacer" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import BottomNavigation from "@/components/layout/BottomNavigation";
import RelativeStrength from "@/components/how-to-help/relative-strength/RelativeStrength";

export default {
  components: { BottomNavigation, RelativeStrength },
  created() {
    this.updateBreadcrumbs({
      breadcrumbs: [
        {
          text: "How to Help",
          active: true
        },
        {
          text: "Strengths",
          active: true
        }
      ]
    });
  },
  computed: {
    relativeWeaknessesRoute() {
      return {
        name: "relative-weaknesses"
      };
    },
    ...mapGetters("howToHelp", { strengths: "getStrengths" })
  },
  methods: {
    ...mapActions("breadcrumbs", ["updateBreadcrumbs"])
  }
};
</script>

<style scoped>
#strengths {
  display: flex;
  justify-content: space-evenly;
}

.spacer {
  height: 50px;
}
</style>