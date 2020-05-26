<template>
  <div>
    <h3>Areas for Growth</h3>

    <div id="weaknesses">
      <div id="primary-weakness">
        <span class="weakness-text">{{student.name}} needs the</span>
        <span class="weakness-text">most support with</span>
        <span class="weakness-text">{{student.demographic.possessivePronoun}} ability to</span>
        <span class="weakness-text bold">comprehend</span>
        <span class="weakness-text bold">
          fiction texts
          <sub class="the-i">i</sub>
        </span>
      </div>
      <div id="secondary-weakness">
        <span class="weakness-text">{{student.name}} also needs</span>
        <span class="weakness-text">support with building</span>
        <span class="weakness-text">
          {{student.demographic.possessivePronoun}}
          <span class="bold">grade-level</span>
        </span>
        <span class="weakness-text bold">
          vocabulary
          <sub class="the-i">i</sub>
        </span>
      </div>
    </div>

    <div class="spacer" />

    <h4>What this could mean for {{student.name}}'s future</h4>

    <div class="row">
      <div class="col s8">
        <svg height="400" width="600">
          <line x1="50" x2="50" y1="50" y2="350" stroke="gray" />
          <line x1="50" x2="500" y1="350" y2="350" stroke="gray" />

          <line x1="50" x2="500" y1="320" y2="150" stroke="black" stroke-width="3" />
          <line
            x1="50"
            x2="500"
            y1="100"
            y2="100"
            stroke="gray"
            stroke-dasharray="4 4"
            stroke-width="2"
          />
        </svg>
      </div>
      <div class="col s4 center-align">
        <div class="spacer" />
        At a "normal" pace for reading development {{student.name}} is
        <b>unlikely to grow enough to graduate ready to read college textx</b>
      </div>
    </div>

    <div class="spacer" />

    <bottom-navigation
      backText="Return to Strengths"
      :backRoute="relativeStrengthsRoute"
      nextText="See Suggested Supports"
      :nextRoute="suggestedSupportsRoute"
    />

    <div class="spacer" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default {
  components: { BottomNavigation },
  computed: {
    ...mapGetters("student", { student: "getStudent" }),
    relativeStrengthsRoute() {
      return {
        name: "relative-strengths"
      };
    },
    suggestedSupportsRoute() {
      return {
        name: "suggested-supports"
      };
    }
  }
};
</script>

<style scoped>
#weaknesses {
  display: flex;
  justify-content: space-around;
}

#primary-weakness {
  border-radius: 50%;
  background-color: red;
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#secondary-weakness {
  border-radius: 50%;
  background-color: orange;
  height: 320px;
  width: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.weakness-text {
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: lighter;
}

.bold {
  font-weight: bolder;
}

.the-i {
  font-style: italic;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  color: black;
}

.spacer {
  height: 50px;
}

.center-align {
  text-align: center;
}
</style>
