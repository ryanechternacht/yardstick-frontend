<template>
  <div>
    <div id="top-spacer"></div>

    <h3 id class="center">
      {{student.name}} is
      <student-status :student="student" />
      <br />
      Based on {{student.demographic.possessivePronoun}} scores
      <br />on the PreACT 8/9, Forward Exam and NWEA MAP.
    </h3>

    <h4 class="center">What should we show you next?</h4>

    <div id="actions">
      <router-link tag="div" :to="'assessments'">
        <div class="action-item center">
          <span>How {{student.name}} is doing across all of {{student.demographic.possessivePronoun}} assessments.</span>
        </div>
      </router-link>
      <router-link tag="div" :to="'how-to-help'">
        <div class="action-item center">
          <span>Where {{student.name}} is doing well and where {{student.demographic.subjectPronoun}} has room to grow.</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StudentStatus from "@/components/summary/StudentStatus";

export default {
  components: {
    StudentStatus
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("student", { student: "getStudent" })
  }
};
</script>

<style>
.center {
  text-align: center;
}

#top-spacer {
  height: 100px;
}

#actions {
  display: flex;
  justify-content: space-evenly;
}

.action-item {
  width: 200px;
  height: 100px;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 4px 4px 4px;
  cursor: pointer;
}
</style>