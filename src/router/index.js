import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/Home2.vue";
import Home3 from "../views/Home3.vue";
import Home4 from "../views/Home4.vue";
import Home5 from "../views/Home5.vue";
import Contador from "../components/contador.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Home2",
    name: "Home2",
    component: Home2,
  },
  {
    path: "/Home3",
    name: "Home3",
    component: Home3,
  },
  {
    path: "/Home4",
    name: "Home4",
    component: Home4,
  },
  {
    path: "/Home5",
    name: "Home5",
    component: Home5,
  },
  {
    path: "/",
    name: "Contador",
    component: Contador,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
