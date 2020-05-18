import * as _ from "lodash";

// TEST DATA
let darylAssessments = [
  {
    name: "PreACT 8/9",
    status: "on-track",
    id: 1,
    result: {
      average: 220,
      minimum: 200,
      maximum: 250,
      score: 239
    }
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "at-risk",
    id: 2,
    result: {
      average: 220,
      minimum: 200,
      maximum: 250,
      score: 209
    }
  }
];
darylAssessments.supressWarnings = true; // to keep es-lint off my back

let delilahAssessments = [
  {
    name: "PreACT 8/9",
    status: "off-track",
    id: 3,
    result: {
      average: 235,
      minimum: 200,
      maximum: 250,
      score: 239
    }
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "advanced",
    id: 4,
    result: {
      average: 235,
      minimum: 200,
      maximum: 250,
      score: 209
    }
  }
];
delilahAssessments.supressWarnings = true; // to keep es-lint off my back

export default {
  namespaced: true,
  state: {
    assessments: darylAssessments,
    // assessments: delilahAssessments
  },
  getters: {
    getOverview(state) {
      return state.assessments;
    },
    getAssessment: state => id => {
      let items = _.filter(state.assessments, a => a.id == id);
      return items.length ? items[0] : {};
    }
  },
  mutations: {

  },
  actions: {

  }
}