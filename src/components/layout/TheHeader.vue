<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand to="/">Yardstick</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" :class="{active: area == 'summary'}">Summary</b-nav-item>
        <b-nav-item to="/faq" :class="{active: area == 'assessment'}">Assessment</b-nav-item>
        <b-nav-item to="/faq" :class="{active: area == 'how-to-help'}">How to Help</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "the-header",
  data() {
    return {
      area: "summary"
    };
  }
};
</script>

<style>
</style>