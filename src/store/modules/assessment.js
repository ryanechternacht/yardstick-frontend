// TEST DATA
let darylOverview = [
  {
    name: "PreACT 8/9",
    status: "on-track",
    id: 1
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "at-risk",
    id: 2
  }
];
darylOverview.supressWarnings = true; // to keep es-lint off my back

let delilahOverview = [
  {
    name: "PreACT 8/9",
    status: "off-track",
    id: 1
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "advanced",
    id: 2
  }
]
delilahOverview.supressWarnings = true; // to keep es-lint off my back

export default {
  namespaced: true,
  state: {
    overview: darylOverview,
    // overview: delilahOverview
  },
  getters: {
    getOverview(state) {
      return state.overview;
    }
  },
  mutations: {

  },
  actions: {

  }
}