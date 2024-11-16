import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import AboutPage from '../components/About.vue';
import TimelinePage from '../components/Timeline.vue';
import ContactPage from '../components/Contact.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/timeline', component: TimelinePage },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
