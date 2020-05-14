// TEST DATA
let daryl = {
  name: "Daryl",
  demographic: {
    subjectPronoun: "he",
    possessivePronoun: "his",
  },
  academicStatus: {
    level: "at-risk"
  }
};
daryl.supressWarnings = true; // to keep es-lint off my back

let delilah = {
  name: "Delilah",
  demographic: {
    subjectPronoun: "she",
    possessivePronoun: "her",
  },
  academicStatus: {
    level: "on-track"
  }
};
delilah.supressWarnings = true; // to keep es-lint off my back

export default {
  namespaced: true,
  state: {
    student: daryl
  },
  getters: {
    getStudent(state) {
      return state.student;
    }
  },
  mutations: {

  },
  actions: {

  }
}