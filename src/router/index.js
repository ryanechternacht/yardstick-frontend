import Vue from "vue";
import VueRouter from "vue-router";

import SummaryOverview from "@/views/SummaryOverview";
import AssessmentsOverview from "@/views/AssessmentsOverview";
import HowToHelpOverview from "@/views/HowToHelpOverview";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/summary"
  },
  {
    path: "/summary",
    name: "summary",
    component: SummaryOverview
  },
  {
    path: "/assessments",
    name: "assessments",
    component: AssessmentsOverview
  },
  {
    path: "/how-to-help",
    name: "how-to-help",
    component: HowToHelpOverview
  }
  // {
  //   path: "/",
  //   name: "card-list",
  //   component: CardList
  // },
  // {
  //   path: "/faq",
  //   component: FaqLayout,
  //   name: "faq",
  //   props(route) {
  //     return {
  //       initialSearchTerm: route.params.term
  //     };
  //   },
  //   children: [
  //     {
  //       path: "",
  //       component: FaqHome,
  //       name: "faq-home"
  //       // props: true,
  //     },
  //     {
  //       path: "search/:term",
  //       component: FaqSearchResults,
  //       name: "faq-search-results",
  //       props: true
  //     },
  //     {
  //       path: "entry/new",
  //       component: FaqPageEdit,
  //       name: "faq-page-new",
  //       props: {
  //         id: 0
  //       }
  //     },
  //     {
  //       path: "entry/:id",
  //       component: FaqPage,
  //       name: "faq-page",
  //       props: true
  //     },
  //     {
  //       path: "entry/:id/edit",
  //       component: FaqPageEdit,
  //       name: "faq-page-edit",
  //       props: true
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;