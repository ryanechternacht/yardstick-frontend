<template>
  <div>
    <h3>Relative Strengths</h3>

    <div class="spacer" />

    <div id="strengths">
      <div>
        <div class="center-align">Shooting Star</div>
        <img src="@/assets/toll-road.svg" height="150" width="150" />
        <div class="center-align">
          Learn More
          <extra-info-icon />
        </div>
      </div>
      <div>
        <div class="center-align">Top of class</div>
        <img src="@/assets/healthcare-and-medical.svg" height="150" width="150" />
        <div class="center-align">
          Learn More
          <extra-info-icon />
        </div>
      </div>
      <div>
        <div class="center-align">Math Wizard</div>
        <img src="@/assets/nurse.svg" height="150" width="150" />
        <div class="center-align">
          Learn More
          <extra-info-icon />
        </div>
      </div>
      <div>
        <div class="center-align">Mr. Consistent</div>
        <img src="@/assets/plumber.svg" height="150" width="150" />
        <div class="center-align">
          Learn More
          <extra-info-icon />
        </div>
      </div>
    </div>

    <div class="spacer" />

    <bottom-navigation nextText="Click to See More" :nextRoute="relativeWeaknessesRoute" />

    <div class="spacer" />
  </div>
</template>

<script>
import BottomNavigation from "@/components/layout/BottomNavigation";
import ExtraInfoIcon from "@/components/inform/ExtraInfoIcon";

export default {
  components: { BottomNavigation, ExtraInfoIcon },
  computed: {
    relativeWeaknessesRoute() {
      return {
        name: "relative-weaknesses"
      };
    }
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

.center-align {
  text-align: center;
}
</style>