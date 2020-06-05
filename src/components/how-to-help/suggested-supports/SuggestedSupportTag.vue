<template>
  <div class="tag">{{tag}}</div>
</template>

<script>
export default {
  name: "suggested-support-tag",
  props: ["tag"]
};
</script>

<style scoped>
.tag {
  background-color: #eee;
  padding: 4px 12px;
}
</style>