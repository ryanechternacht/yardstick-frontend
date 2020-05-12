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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;