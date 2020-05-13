// TEST DATA
let daryl = {
  name: "Daryl",
  subjectPronoun: "he",
  possessivePronoun: "his"
};
daryl.supressWarnings = true; // to keep es-lint off my back

let delilah = {
  name: "Delilah",
  subjectPronoun: "she",
  possessivePronoun: "her"
};
delilah.supressWarnings = true; // to keep es-lint off my back

export default {
  namespaced: true,
  state: {
    student: daryl
  },
  getters: {
    getStudent(state) {
      console.log('getStudent');
      return state.student;
    }
  },
  mutations: {

  },
  actions: {

  }
}