import Axios from 'axios';
import * as ActionTypes from '../action-types';
import * as MutationTypes from '../mutation-types';
import { ActionContext } from '../types';

export interface State {
  movies: any[]
}

// initial state
const initState = {
  movies: [],
};

// getters
const getters = {
  getMovies: (state: State) => state.movies,
};

// actions
const actions = {
  [ActionTypes.fetchMovies]: (context: ActionContext<State>, search: string) => {
    Axios.get('');
  },
};

// mutations
const mutations = {
  [MutationTypes.SET_MOVIES]: (state: State, movies: any[]) => {
    state.movies = movies;
  },
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
