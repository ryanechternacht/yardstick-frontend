import Vue from "vue";
import VueRouter from "vue-router";

import SummaryOverview from "@/views/summary/SummaryOverview";

import AssessmentsOverview from "@/views/assessments/AssessmentsOverview";
import AssessmentOverview from "@/views/assessments/AssessmentOverview";
import AssessmentDetails from "@/views/assessments/AssessmentDetails";
import AssessmentDetailsTable from "@/views/assessments/AssessmentDetailsTable";

import RelativeStrengths from "@/views/how-to-help/RelativeStrengths";
import RelativeWeaknesses from "@/views/how-to-help/RelativeWeaknesses";


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
  // TODO nest?
  {
    path: "/assessment/:assessmentId",
    name: "assessment-overview",
    component: AssessmentOverview,
    props: true
  },
  {
    path: "/assessment/:assessmentId/details",
    name: "assessment-details",
    component: AssessmentDetails,
    props: true
  },
  {
    path: "/assessment/:assessmentId/table",
    name: "assessment-details-table",
    component: AssessmentDetailsTable,
    props: true
  },
  {
    path: "/how-to-help/strengths",
    name: "relative-strengths",
    component: RelativeStrengths
  },
  {
    path: "/how-to-help/weaknesses",
    name: "relative-weaknesses",
    component: RelativeWeaknesses
  }
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});