export default {
  namespaced: true,
  state: {
    breadcrumbs: []
  },
  getters: {
    getBreadcrumbs(state) {
      return state.breadcrumbs;
    },
  },
  mutations: {
    setBreadcrumbs(state, { breadcrumbs }) {
      state.breadcrumbs = breadcrumbs;
    }
  },
  actions: {
    updateBreadcrumbs({ commit }, { breadcrumbs }) {
      commit("setBreadcrumbs", { breadcrumbs });
    }
  }
}