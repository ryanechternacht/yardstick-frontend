<template>
  <div>
    <h4>{{support.title}}</h4>
    <suggested-support-tags :tags="support.tags" class="mb" />
    <div class="mb">{{support.body}}</div>
    <div class="right">
      <b-button variant="primary">See the Action Plan</b-button>
    </div>
  </div>
</template>

<script>
import SuggestedSupportTags from "./SuggestedSupportTags";

export default {
  name: "suggested-support",
  props: ["support"],
  components: { SuggestedSupportTags }
};
</script>

<style scoped>
.mb {
  margin-bottom: 0.5em;
}

.right {
  display: flex;
  justify-content: flex-end;
}
</style>