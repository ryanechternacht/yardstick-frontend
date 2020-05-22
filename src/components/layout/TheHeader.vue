<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Yardstick</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'summary'}" :class="{active: area == 'summary'}">Summary</b-nav-item>
        <b-nav-item :to="{name: 'assessments'}" :class="{active: area == 'assessments'}">Assessments</b-nav-item>
        <b-nav-item
          :to="{name: 'relative-strengths'}"
          :class="{active: area == 'how-to-help'}"
        >How to Help</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  created() {
    this.updateCurrentArea();
  },
  data() {
    return {
      area: null
    };
  },
  methods: {
    updateCurrentArea() {
      // This is dumb -- i'm just too lazy to nest the routes
      if (this.$route.matched.length) {
        let path = this.$route.matched[0].path;
        if (path.startsWith("/assessment")) {
          this.area = "assessments";
        } else if (path.startsWith("/summary")) {
          this.area = "summary";
        } else if (path.startsWith("/how-to-help")) {
          this.area = "how-to-help";
        } else {
          this.area = "";
        }
      }
    }
  },
  watch: {
    $route: "updateCurrentArea"
  }
};
</script>

<style>
</style>