import { createRouter,createWebHistory } from "vue-router";
import PageOne from './components/PageOne.vue';
import PageTwo from './components/PageTwo.vue';
import HomePage from './components/HomePage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/similarDev-test', component: HomePage },
    { path: '/similarDev-test/registration', component: PageOne },
    { path: '/similarDev-test/registration_email', component: PageTwo },
  ],
})