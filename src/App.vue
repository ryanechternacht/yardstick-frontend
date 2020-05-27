<template>
  <div id="app">
    <the-header />
    <b-container>
      <the-breadcrumbs />
      <div class="main-view">
        <router-view />
      </div>
    </b-container>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheBreadcrumbs from "@/components/layout/TheBreadcrumbs";

export default {
  name: "App",
  components: {
    TheHeader,
    TheBreadcrumbs
  }
};
</script>

<style scoped>
.main-view {
  margin-top: 20px;
}
</style>