import { createRouter, createWebHistory } from "vue-router";
import Cover from "../views/Cover.vue";
import Main from "../views/Main.vue";
import Final from "../views/Final.vue";

const routes = [
  {
    path: "/",
    name: "Cover",
    component: Cover,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },{
    path: "/final",
    name: "Final",
    component: Final,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
