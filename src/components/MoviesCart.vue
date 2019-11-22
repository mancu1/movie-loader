<template>
  <v-card
    class="mx-auto"
    :elevation="5"
    max-width="20vw"
    height="100%"
  >
    <v-img
      :src="movie.poster_path"
      aspect-ratio="0.8"
      contain
    />
    <v-card-title class="gr-center">
      {{ movie.title }}
    </v-card-title>
    <v-card-text>{{ movie.overview }}</v-card-text>
    <v-card-actions>
              <v-btn text @click="openMovie()">Подробнее</v-btn>
            </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MovieType } from '../types/MovieType';

@Component({
  name: 'MoviesCart',
  components: {},
})
export default class MoviesCart extends Vue {
  @Prop() readonly movie!: MovieType;

  private openMovie() {
    this.$router.push(`/movie/${this.movie.id}`);
  }
}
</script>
<style lang="scss">
.grid {
  display: grid;
}
.gr-center {
  justify-content: center;
  justify-items: center;
  justify-self: center;
}
.gr-auto-row {
  grid-template-rows: auto max-content max-content;
}
</style>
