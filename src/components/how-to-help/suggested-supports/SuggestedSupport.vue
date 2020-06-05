<template>
  <div>
    <h4>{{support.title}}</h4>
    <suggested-support-tags :tags="support.tags" class="mb-10" />
    <div class="mb-10">{{support.body}}</div>
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
.mb-10 {
  margin-bottom: 10px;
}

.right {
  display: flex;
  justify-content: flex-end;
}
</style>