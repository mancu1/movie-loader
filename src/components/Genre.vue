<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-btn @click="getGenres()">Press me</v-btn>
      </v-flex>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(genre, i) in genres" :key="i">
          <v-expansion-panel-header @click="getMovies(genre.id)">{{ genre.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card v-if="!!movies && Array.isArray(movies) && movies.length" class="mb-6 grid-c4">
              <div v-for="(movie, i) in movies" :key="i">
              <MoviesCart :movie="movie"/>
              </div>
              </v-card>
            <v-card v-else class="mb-6 grid-c4">
            <v-skeleton-loader
            v-for="i in 20" :key="i" class="pa-4" loading type="article">
            </v-skeleton-loader>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as actionTypes from '../store/action-types';
import * as MutationTypes from '../store/mutation-types';
import { MovieType } from '../types/MovieType';
import { GenreType } from '../types/GenreType';
import MoviesCart from './MoviesCart.vue';

@Component({
  name: 'Genre',
  components: {
    MoviesCart,
  },
})
export default class Genre extends Vue {
  private getGenres() {
    this.$store.dispatch(actionTypes.fetchMoviesGenre);
  }

  private getMovies(id: string) {
    this.$store.dispatch(actionTypes.fetchMovies, id);
  }

  get genres(): GenreType[] {
    return this.$store.getters.getGenres;
  }

  get movies(): MovieType[] {
    return this.$store.getters.getMovies;
  }
}
</script>

<style lang="scss" scoped>
.grid-c4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
}
</style>