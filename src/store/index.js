import Vue from 'vue'
import Vuex from 'vuex'

import student from "./modules/student";
import assessment from "./modules/assessment";
import breadcrumbs from "./modules/breadcrumbs";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    student,
    assessment,
    breadcrumbs
  }
})
