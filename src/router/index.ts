import { createRouter, createWebHistory } from "vue-router";
import { DayViewPage, WeekViewPage, MonthViewPage, YearViewPage } from "@/pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/week",
    },
    {
      name: "dayView",
      path: "/day",
      component: DayViewPage,
    },
    {
      name: "weekView",
      path: "/week",
      component: WeekViewPage,
    },
    {
      name: "monthView",
      path: "/month",
      component: MonthViewPage,
    },
    {
      name: "yearView",
      path: "/year",
      component: YearViewPage,
    },
  ],
});

export default router;
