<template>
  <div>
    <h4>{{support.title}}</h4>
    <div>{{support.tags}}</div>
    <div>{{support.body}}</div>
    <div class="right">
      <b-button variant="primary">See the Action Plan</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "suggested-support",
  props: ["support"]
};
</script>

<style>
</style>