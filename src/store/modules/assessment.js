// TEST DATA
let darylOverview = [
  {
    name: "PreACT 8/9",
    status: "on-track"
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "at-risk"
  }
];
darylOverview.supressWarnings = true; // to keep es-lint off my back

let delilahOverview = [
  {
    name: "PreACT 8/9",
    status: "off-track"
  },
  {
    name: "NWEA MAP - Mathematics",
    status: "advanced"
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