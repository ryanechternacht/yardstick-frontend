<template>
  <div>
    <div id="top-spacer"></div>

    <h3 id class="center">
      {{student.name}} is
      <span class="at-risk">At Risk</span>
      <br />
      Based on {{student.possessivePronoun}} scores
      <br />on the PreACT 8/9, Forward Exam and NWEA MAP.
    </h3>

    <h4 class="center">What should we show you next?</h4>

    <div id="actions">
      <router-link tag="div" :to="'assessments'">
        <div class="action-item center">
          <span>How {{student.name}} is doing across all of {{student.possessivePronoun}} assessments.</span>
        </div>
      </router-link>
      <router-link tag="div" :to="'how-to-help'">
        <div class="action-item center">
          <span>Where {{student.name}} is doing well and where {{student.subjectPronoun}} has room to grow.</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: "Daryl",
        subjectPronoun: "he",
        possessivePronoun: "his"
      }
    };
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

.at-risk {
  font-weight: bold;
  color: orange;
  text-decoration: underline;
}
</style>