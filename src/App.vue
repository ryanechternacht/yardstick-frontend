<template>
  <div id="app">
    <the-header></the-header>
    <div class="container main-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>

<style>
.main-view {
  margin-top: 20px;
}
</style>