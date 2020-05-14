import Vue from 'vue'
import Vuex from 'vuex'

import student from "./modules/student";
import assessment from "./modules/assessment";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    student,
    assessment
  }
})
