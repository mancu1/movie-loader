import Axios from 'axios';
import * as ActionTypes from '../action-types';
import * as MutationTypes from '../mutation-types';
import { ActionContext } from '../types';
import { RestApiUrl, getRequestUrl, ImgApiUrl } from '@/environment';
import { MovieType } from '@/types/MovieType';
import { GenreType } from '@/types/GenreType';

export interface State {
  movies: MovieType[]
  genres: GenreType[]
}

// initial state
const initState: State = {
  movies: [],
  genres: [],
};

// getters
const getters = {
  getMovies: (state: State) => state.movies,
  getGenres: (state: State) => state.genres,
};

// actions
const actions = {
  [ActionTypes.fetchMovies]: (context: ActionContext<State>, search: string) => {
    context.commit(MutationTypes.CLEAR_MOVIES);
    Axios.get(getRequestUrl('/discover/movie', { with_genres: search }))
      .then((response) => {
        context.commit(MutationTypes.SET_MOVIES, response.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  },
  [ActionTypes.fetchMoviesGenre]: (context: ActionContext<State>) => {
    Axios.get(getRequestUrl('/genre/movie/list', null))
      .then((response: any) => {
        context.commit(MutationTypes.SET_MOVIES_GENRE, response.data.genres);
      })
      .catch((err) => {
        alert(err);
      });
  },
};

// mutations
const mutations = {
  [MutationTypes.SET_MOVIES]: (state: State, movies: MovieType[]) => {
    state.movies = movies.map(movie => ({
      ...movie,
      poster_path: `${ImgApiUrl}${movie.poster_path}`,
      overview: movie.overview.length > 150 ? `${movie.overview.substring(0, 150)}... ` : movie.overview,
    }));
  },
  [MutationTypes.SET_MOVIES_GENRE]: (state: State, genres: GenreType[]) => {
    state.genres = genres;
  },
  [MutationTypes.CLEAR_MOVIES]: (state: State) => {
    state.movies = [];
  },
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
