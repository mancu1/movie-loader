<template>
<v-card class="mx-auto" max-width="320"
              outlined tile>
                <v-img :src="movie.poster_path" max-width="320" contain></v-img>
                <v-card-title>{{movie.title}}</v-card-title>
                <v-card-text>{{movie.overview}}</v-card-text>
          </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { MovieType } from '../types/MovieType';

@Component({
  name: 'MoviesCart',
  components: {},
}) export default class MoviesCart extends Vue {
  @Prop()readonly movie!: MovieType;
}
</script>
