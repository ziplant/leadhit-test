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
<<<<<<< HEAD
  history: createWebHashHistory(),
=======
  history: createWebHistory(),
>>>>>>> 9165e36df18311998b24e744f9330af99c2133f1
  routes,
});

export default router;
