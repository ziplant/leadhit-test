import { createRouter, createWebHashHistory } from "vue-router";
import Auth from "../views/Auth.vue";

const routes = [
  {
    path: "/",
    name: "Authorization",
    component: Auth,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: () => import("../views/Analytics.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
