<template>
  <span
    id="status-label"
    :class="{'off-track': academicStatus.level == 'off-track',
             'at-risk': academicStatus.level == 'at-risk',
             'likely-on-track': academicStatus.level == 'likely-on-track',
             'on-track': academicStatus.level == 'on-track',
             'advanced': academicStatus.level == 'advanced'}"
  >{{statusLabel}}</span>
</template>

<script>
export default {
  name: "student-status",
  props: ["academicStatus"],
  computed: {
    statusLabel() {
      switch (this.academicStatus.level) {
        case "off-track":
          return "Off Track";
        case "at-risk":
          return "At Risk";
        case "likely-on-track":
          return "Likely on Track";
        case "on-track":
          return "On Track";
        case "advanced":
          return "Advanced";
        default:
          return this.academicStatus.level;
      }
    }
  }
};
</script>

<style scoped lang="scss">
#status-label {
  font-weight: bold;
  text-decoration: underline;
}
</style>
