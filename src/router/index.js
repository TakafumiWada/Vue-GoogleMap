import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PostMap from "../views/PostMap.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/viewmap",
    name: "ViewMap",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewMap.vue"),
  },
  {
    path: "/postmap",
    name: "PostMap",
    component: PostMap,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
