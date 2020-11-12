import { createRouter, createWebHistory } from "vue-router";
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
  history: createWebHistory(),
  routes,
});

export default router;
