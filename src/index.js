import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProjectDetail from "../components/ProjectDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects/:id", component: ProjectDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
