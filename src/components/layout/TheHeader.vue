<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Yardstick</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="summary" :class="{active: area == 'summary'}">Summary</b-nav-item>
        <b-nav-item to="assessments" :class="{active: area == 'assessments'}">Assessments</b-nav-item>
        <b-nav-item to="how-to-help" :class="{active: area == 'how-to-help'}">How to Help</b-nav-item>
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
      this.area = this.$route.matched.length && this.$route.matched[0].name;
    }
  },
  watch: {
    $route: "updateCurrentArea"
  }
};
</script>

<style>
</style>