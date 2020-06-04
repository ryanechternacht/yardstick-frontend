export default {
  namespaced: true,
  state: {
    supports: [
      {
        title: "Help Darryl Comprehend What he is Reading by having Gist Converations",
        tags: ["Suggested by School", "Daily", "Computer not Required"],
        body: `"Gist" is a great tool for helping reads develop a reoccurring habit to always be self monitoring
               if they are actually undstanding what they have just read. By having quick, frequent conversations with Darryl,
               you can help him develop this habit in just a few weeks.`,
        actionPlanLink: "",
        id: 1
      },
      {
        title: "Assist Darryl in Selecting Fiction Books that Match His Developmental Level",
        tags: ["Suggested by Teacher", "Ongoing", "Computer based"],
        body: `For his independent reading to have a positive impact on Darryl's comprehension he needs to be engaging with
               books at the right level. Too easy, and he won't be pushed to stretch his abilities. Too hard and it is likely
               to be a frustrating experience. Using online tools you can help him select books in his development sweetspot.`,
        actionPlanLink: "",
        id: 2
      },
      {
        title: "Work with Darryl to Master More Grade Level Vocabulary",
        tags: ["Weekly", "Flashcards"],
        body: `Knowing Darryl needs increased support to build out his undersatnding of grade level appropriate vocabulary
               helping him work through a set of flashcards is a quick way to help him feel more comfortable when tackling
               challenging texts.`,
        actionPlanLink: "",
        id: 3
      }
    ]
  },
  getters: {
    getSupports(state) {
      return state.supports;
    }
  },
  mutations: {

  },
  actions: {

  }
}
