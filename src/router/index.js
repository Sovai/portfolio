import { createWebHistory, createRouter } from "vue-router";

// Layout
import PublicLayout from "@/layouts/BlankLayout.vue";
import PrivateLayout from "@/layouts/AppLayout.vue";

// Pages
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import NotFound from "@/pages/NotFound.vue";
const routes = [
  {
    path: "/",
    component: PrivateLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomePage,
      },
      {
        path: "/about",
        name: "AboutPage",
        component: AboutPage,
        meta: { dark: false },
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: PublicLayout,
    children: [
      {
        path: "",
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { left: 0, top: 0 }; // does not work if body overflow auto/scroll
  },
  routes,
});

export default router;
