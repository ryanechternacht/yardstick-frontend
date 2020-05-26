<template>
  <div class="bottom-nav">
    <div
      v-if="shouldRenderBack"
      class="center-align"
      :class="{pointer: backRoute}"
      @click="goBack()"
    >
      <div class="nav-row">
        <svg height="16" width="44">
          <path d="M 0 16 l 22 -16 l 22 16 l -3 0 l -19 -13 l -19 13 Z" />
        </svg>
      </div>
      <div class="nav-row">{{backText || "Back"}}</div>
    </div>
    <div
      v-if="shouldRenderNext"
      class="center-align"
      :class="{pointer: nextRoute}"
      @click="gotoNext()"
    >
      <div class="nav-row">{{nextText || "Next"}}</div>
      <div class="nav-row">
        <svg height="16" width="44">
          <path d="M 0 0 l 22 16 l 22 -16 l -3 0 l -19 13 l -19 -13 Z" />
        </svg>
      </div>
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

.nav-row {
  line-height: 36px;
}
</style>