import Axios from 'axios';
import * as ActionTypes from '../action-types';
import * as MutationTypes from '../mutation-types';
import { ActionContext } from '../types';
import { getRequestUrl, ImgApiUrl } from '@/environment';
import { MovieType } from '@/types/MovieType';
import { GenreType } from '@/types/GenreType';

export interface State {
  movies: MovieType[]
  genres: GenreType[]
  selectedMovie?: MovieType
}

// initial state
const initState: State = {
  movies: [],
  genres: [],
  selectedMovie: undefined,
};

// getters
const getters = {
  getMovies: (state: State) => state.movies,
  getGenres: (state: State) => state.genres,
  getMovie: (state: State) => state.selectedMovie,
};

// actions
const actions = {
  // fetch 20 movies by genre
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
  // fetch all genres
  [ActionTypes.fetchMoviesGenre]: (context: ActionContext<State>) => {
    Axios.get(getRequestUrl('/genre/movie/list', null))
      .then((response: any) => {
        context.commit(MutationTypes.SET_MOVIES_GENRE, response.data.genres);
      })
      .catch((err) => {
        alert(err);
      });
  },
  // fetch movie by id
  [ActionTypes.fetchMovie]: (context: ActionContext<State>, movieId: string) => {
    context.commit(MutationTypes.CLEAR_MOVIE);
    Axios.get(getRequestUrl(`/movie/${movieId}`, null))
      .then((response: any) => {
        Axios.get(getRequestUrl(`/movie/${movieId}/videos`, null))
          .then((videosRespone) => {
            context.commit(MutationTypes.SET_MOVIE,
              { ...response.data, videos: videosRespone.data.results });
          })
          .catch((err) => {
            alert(err);
          });
      }).catch((err) => {
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
  [MutationTypes.SET_MOVIE]: (state: State, movie: MovieType) => {
    state.selectedMovie = {
      ...movie,
      poster_path: `${ImgApiUrl}${movie.poster_path}`,
    };
  },
  [MutationTypes.CLEAR_MOVIE]: (state: State) => {
    state.selectedMovie = undefined;
  },
};

export default {
  state: initState,
  getters,
  actions,
  mutations,
};
