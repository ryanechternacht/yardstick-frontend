import * as _ from "lodash";

// TEST DATA
let darylAssessments = [
  {
    name: "PreACT 8/9",
    status: "on-track",
    id: 1,
    overview: {
      average: 220,
      minimum: 200,
      maximum: 250,
      score: 239
    },
    results: {
      minimum: 200,
      maximum: 250,
      scores: [208, 222, 214, 226, 234, 242]
    },
    breakdown: {
      achievement: 70,
      growth: 98,
      topics: [
        {
          topic: "Geometry",
          score: 40
        },
        {
          topic: "Statistics and Probability",
          score: 60
        },
        {
          topic: "Operations and Algeabraic Thinking",
          score: 70
        },
        {
          topic: "The Real and Complex Number System",
          score: 80
        }
      ]
    }
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "at-risk",
    id: 2,
    overview: {
      average: 220,
      minimum: 200,
      maximum: 250,
      score: 209
    },
    results: {
      minimum: 200,
      maximum: 250,
      scores: [224, 228, 240, 242, 240, 248]
    },
    breakdown: {
      achievement: 40,
      growth: 20,
      topics: [
        {
          topic: "Geometry",
          score: 90
        },
        {
          topic: "Statistics and Probability",
          score: 60
        },
        {
          topic: "Operations and Algeabraic Thinking",
          score: 20
        },
        {
          topic: "The Real and Complex Number System",
          score: 30
        }
      ]
    }
  }
];
darylAssessments.supressWarnings = true; // to keep es-lint off my back

let delilahAssessments = [
  {
    name: "PreACT 8/9",
    status: "off-track",
    id: 3,
    overview: {
      average: 235,
      minimum: 200,
      maximum: 250,
      score: 239
    },
    results: {
      minimum: 200,
      maximum: 250,
      scores: [224, 218, 214, 224, 240, 234]
    },
    breakdown: {
      achievement: 100,
      growth: 90,
      topics: [
        {
          topic: "Geometry",
          score: 100
        },
        {
          topic: "Statistics and Probability",
          score: 80
        },
        {
          topic: "Operations and Algeabraic Thinking",
          score: 95
        },
        {
          topic: "The Real and Complex Number System",
          score: 90
        }
      ]
    }
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "advanced",
    id: 4,
    overvie: {
      average: 235,
      minimum: 200,
      maximum: 250,
      score: 209
    },
    results: {
      minimum: 200,
      maximum: 250,
      scores: [208, 210, 200, 202, 200, 202]
    },
    breakdown: {
      achievement: 50,
      growth: 40,
      topics: [
        {
          topic: "Geometry",
          score: 30
        },
        {
          topic: "Statistics and Probability",
          score: 40
        },
        {
          topic: "Operations and Algeabraic Thinking",
          score: 60
        },
        {
          topic: "The Real and Complex Number System",
          score: 25
        }
      ]
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