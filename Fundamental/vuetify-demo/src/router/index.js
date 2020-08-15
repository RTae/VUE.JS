import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Button from "../views/Button.vue";
import Breakpoint from "../views/Breakpoint.vue";
import GridSystem from "../views/GridSystem.vue";
import Flex from "../views/Flex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/button",
    name: "Button",
    component: Button
  },
  {
    path: "/breakpoint",
    name: "Breakpoint",
    component: Breakpoint
  },
  {
    path: "/gridsystem",
    name: "GridSystem",
    component: GridSystem
  },
  {
    path: "/flex",
    name: "Flex",
    component: Flex
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
