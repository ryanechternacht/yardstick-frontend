<template>
  <span
    id="status-label"
    :class="{'off-tack': student.academicStatus.level == 'off-track',
             'at-risk': student.academicStatus.level == 'at-risk',
             'likely-on-track': student.academicStatus.level == 'likely-on-track',
             'on-track': student.academicStatus.level == 'on-track',
             'advanced': student.academicStatus.level == 'advanced'}"
  >At Risk</span>
</template>

<script>
export default {
  name: "student-status",
  props: ["student"]
};
</script>

<style scoped lang="scss">
// @import "@/assets/yardstick.scss";

#status-label {
  font-weight: bold;
  text-decoration: underline;
}
</style>
