<template>
  <div>
    <h3>Relative Strengths</h3>

    <div class="spacer" />

    <div id="strengths">
      <div>
        <div class="center-align">Shooting Star</div>
        <img src="@/assets/toll-road.svg" height="150" width="150" />
        <div class="center-align">Learn More</div>
      </div>
      <div>
        <div class="center-align">Shooting Star</div>
        <img src="@/assets/healthcare-and-medical.svg" height="150" width="150" />
        <div class="center-align">Learn More</div>
      </div>
      <div>
        <div class="center-align">Shooting Star</div>
        <img src="@/assets/nurse.svg" height="150" width="150" />
        <div class="center-align">Learn More</div>
      </div>
      <div>
        <div class="center-align">Shooting Star</div>
        <img src="@/assets/plumber.svg" height="150" width="150" />
        <div class="center-align">Learn More</div>
      </div>
    </div>

    <div class="spacer" />

    <div class="center-align pointer" @click="openAreasForGrowth()">
      <div>Click to See More</div>
      <div>v</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openAreasForGrowth() {
      this.$router.push({
        name: "relative-weaknesses"
      });
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

.pointer {
  cursor: pointer;
}
</style>