<template>
  <div class="tags">
    <suggested-support-tag v-for="(t, i) in tags" :tag="t" :key="i" />
  </div>
</template>

<script>
import SuggestedSupportTag from "./SuggestedSupportTag";

export default {
  name: "suggested-support-tags",
  props: ["tags"],
  components: {
    SuggestedSupportTag
  }
};
</script>

<style scoped>
.tags {
  display: flex;
}

.tags * {
  margin-right: 12px;
}
</style>