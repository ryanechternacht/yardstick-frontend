<template>
  <div class="bottom-nav">
    <div
      v-if="shouldRenderBack"
      class="center-align"
      :class="{pointer: backRoute}"
      @click="goBack()"
    >
      <div>^</div>
      <div>{{backText || "Back"}}</div>
    </div>
    <div
      v-if="shouldRenderNext"
      class="center-align"
      :class="{pointer: nextRoute}"
      @click="gotoNext()"
    >
      <div>{{nextText || "Next"}}</div>
      <div>v</div>
    </div>
  </div>
</template>

<script>
//TODO make this accept a variable number of routes
export default {
  name: "bottom-navigation",
  props: ["backRoute", "backText", "nextRoute", "nextText"],
  computed: {
    shouldRenderBack() {
      return this.backRoute || this.backText;
    },
    shouldRenderNext() {
      return this.nextRoute || this.nextText;
    }
  },
  methods: {
    goBack() {
      if (this.backRoute) {
        this.$router.push(this.backRoute);
      }
    },
    gotoNext() {
      if (this.nextRoute) {
        this.$router.push(this.nextRoute);
      }
    }
  }
};
</script>

<style scoped lang="scss">
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