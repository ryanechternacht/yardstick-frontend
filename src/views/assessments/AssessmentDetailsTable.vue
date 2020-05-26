<template>
  <div>
    <h3>{{assessment.name}} > Details</h3>

    <div class="spacer"></div>

    <table class="table">
      <thead>
        <tr>
          <th class="invisible-cell">
            <!-- for row header -->
          </th>
          <th colspan="3" class="header-cell">8th Grade (2019 - 2020 Results)</th>
          <th colspan="3" class="header-cell">7th Grade (2018 - 2019 Results)</th>
        </tr>
        <tr>
          <th class="invisible-cell">
            <!-- for row header -->
          </th>
          <th class="header-cell">Fall</th>
          <th class="header-cell">Winter</th>
          <th class="header-cell">Spring</th>
          <th class="header-cell">Fall</th>
          <th class="header-cell">Winter</th>
          <th class="header-cell">Spring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>RIT Score</th>
          <td>232</td>
          <td>239</td>
          <td>-</td>
          <td>233</td>
          <td>235</td>
          <td>236</td>
        </tr>
        <tr>
          <th>Norm</th>
          <td>226.5</td>
          <td>229.1</td>
          <td>-</td>
          <td>222.6</td>
          <td>226.1</td>
          <td>228.6</td>
        </tr>
        <tr>
          <th>Growth Goal</th>
          <td>N/A</td>
          <td>6</td>
          <td>-</td>
          <td>N/A</td>
          <td>5</td>
          <td>4</td>
        </tr>
        <tr>
          <th>Met Goal?</th>
          <td>N/A</td>
          <td>Yes</td>
          <td>-</td>
          <td>N/A</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <th>Percentile</th>
          <td>76th</td>
          <td>70th</td>
          <td>-</td>
          <td>75th</td>
          <td>74th</td>
          <td>66th</td>
        </tr>
        <tr>
          <th>Growth Percentile</th>
          <td>52nd</td>
          <td>98th</td>
          <td>-</td>
          <td>65th</td>
          <td>82nd</td>
          <td>51st</td>
        </tr>
        <tr>
          <th>ACT College Readiness</th>
          <td>
            <span class="danger">Not on Track</span>
          </td>
          <td>On Track for a 24</td>
          <td>-</td>
          <td>On Track for a 22</td>
          <td>On Track for a 22</td>
          <td>
            <span class="danger">Not on Track</span>
          </td>
        </tr>
        <tr>
          <th>Forward Projection</th>
          <td>Proficient</td>
          <td>Proficient</td>
          <td>-</td>
          <td>Proficient</td>
          <td>
            <span class="good">Advanced</span>
          </td>
          <td>Proficient</td>
        </tr>
        <tr>
          <th>Test Duration (mins)</th>
          <td>37</td>
          <td>84</td>
          <td>-</td>
          <td>68</td>
          <td>71</td>
          <td>62</td>
        </tr>
      </tbody>
    </table>

    <bottom-navigation
      :backText="assessmentBreakdownNavigationText"
      :backRoute="assessmentBreakdownRoute"
    />

    <div class="spacer" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BottomNavigation from "@/components/layout/BottomNavigation";

export default {
  components: { BottomNavigation },
  props: ["assessmentId"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("assessment", ["getAssessment"]),
    ...mapGetters("student", { student: "getStudent" }),
    assessment() {
      return this.getAssessment(this.assessmentId);
    },
    assessmentBreakdownNavigationText() {
      return `Return to ${this.assessment.name} Breakdown`;
    },
    assessmentBreakdownRoute() {
      return {
        name: "assessment-details",
        params: { assessmentId: this.assessmentId }
      };
    }
  }
};
</script>

<style scoped>
thead th {
  background-color: #eee;
  border-right: white solid 10px;
  border-left: white solid 10px;
  text-align: center;
}

.invisible-cell {
  border: 0;
  background: none;
}

td {
  text-align: center;
}

.danger {
  color: red;
  font-weight: bold;
}

.good {
  color: blue;
  font-weight: bold;
}

.spacer {
  height: 50px;
}
</style>