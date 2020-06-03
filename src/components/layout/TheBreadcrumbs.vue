<template>
  <b-breadcrumb :items="breadcrumbs" />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "the-breadcrumbs",
  data() {
    return {
      items: []
    };
  },
  computed: {
    ...mapGetters("breadcrumbs", { breadcrumbs: "getBreadcrumbs" })
  }
};
</script>

<style scoped lang="scss">
.breadcrumb {
  background-color: transparent;
  padding-left: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
</style>
