import Vue from 'vue';
import VueRouter from 'vue-router';
import Genre from '../components/Genre.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Genre,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
