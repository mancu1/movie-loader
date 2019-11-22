import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Genre.vue'),
  },
  {
    path: '/movie/:movieId',
    name: 'movie',
    component: () => import('../components/MoviePage.vue'),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
