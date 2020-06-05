<template>
  <div>
    <div class="center-align mb-10">{{strength.title}}</div>
    <img :src="strength.icon" height="150" width="150" class="mb-10 center-align" />
    <div class="center-align display-block">
      <b-button
        v-b-tooltip.click.blur.v-primary.bottom
        :title="strength.details"
        variant="outline-primary"
      >
        Learn More
        <extra-info-icon />
      </b-button>
    </div>
  </div>
</template>

<script>
import ExtraInfoIcon from "@/components/inform/ExtraInfoIcon";

export default {
  name: "relative-strength",
  props: ["strength"],
  components: { ExtraInfoIcon }
};
</script>

<style scoped>
.center-align {
  text-align: center;
}

.mb-10 {
  margin-bottom: 10px;
}

.display-block {
  display: block;
}
</style>