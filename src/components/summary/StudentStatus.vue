<template>
  <span
    id="status-label"
    :class="{'at-risk': student.academicStatus.level == 'at-risk',
             'on-track': student.academicStatus.level == 'on-track'}"
  >At Risk</span>
</template>

<script>
export default {
  name: "student-status",
  props: ["student"]
};
</script>

<style>
#status-label {
  font-weight: bold;
  text-decoration: underline;
}

.at-risk {
  color: orange;
}

.on-track {
  color: green;
}
</style>
