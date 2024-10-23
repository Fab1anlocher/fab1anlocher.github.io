import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Home.vue"; // Importiere die Home-Komponente
import AboutPage from "../components/About.vue"; // Importiere die About-Komponente
import TimelinePage from "../components/Timeline.vue"; // Importiere die Timeline-Komponente
import ContactPage from "../components/Contact.vue"; // Importiere die Kontakt-Komponente

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/timeline",
    name: "TimelinePage",
    component: TimelinePage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
