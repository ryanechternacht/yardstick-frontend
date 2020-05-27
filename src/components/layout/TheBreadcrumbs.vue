<template>
  <b-breadcrumb :items="items" />
</template>

<script>
export default {
  name: "the-breadcrumbs",
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#"
        },
        {
          text: "Manage",
          href: "#"
        },
        {
          text: "Library",
          active: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.breadcrumb {
  background-color: transparent;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
</style>