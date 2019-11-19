import Vue from 'vue';
import Vuex from 'vuex';
import movies, { State as MoviesState } from './module/movies';

Vue.use(Vuex);

export interface State {
  MoviesState: MoviesState;
}

export default new Vuex.Store({
  mutations: {
  },
  actions: {
  },
  modules: {
    movies,
  },
});
