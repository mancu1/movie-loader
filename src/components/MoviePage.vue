<template>
  <v-container class="d-flex">
    <v-row>
      <v-img :src="movie.poster_path" max-width="400px" />
    </v-row>
    <v-card>
      <v-card-title class="display-1">
        {{ movie.title }}
      </v-card-title>
      <v-card-text class="title">
        {{ movie.overview }}
      </v-card-text>
      <v-container class="mx-auto">
      <iframe width="720px" height="480px"
        v-if="!!movie.videos && movie.videos.length"
        :src="'https://www.youtube.com/embed/' + movie.videos[0].key"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe></v-container>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as ActionTypes from '../store/action-types';

@Component({
  name: 'MoviePage',
  components: {},
})
export default class MoviePage extends Vue {
  // fetch movie by movieId
  private created() {
    this.$store.dispatch(ActionTypes.fetchMovie, this.movieId);
  }

  // get movieId by url
  get movieId() {
    return this.$route.params.movieId;
  }

  // get movie from response answer
  get movie() {
    return this.$store.getters.getMovie;
  }
}
</script>
