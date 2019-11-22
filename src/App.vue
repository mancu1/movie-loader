<template>
  <div id="app">
    <v-app>
      <!-- header -->
      <v-app-bar
        @click="goTo('/')"
        color="white"
        elevate-on-scroll
        class="d-flex justify-center"
      >
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>Movie loader</v-toolbar-title>
      </v-app-bar>
      <!-- main content -->
      <v-content>
        <v-container>
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {},
})
export default class App extends Vue {
  // routing
  private goTo(path: string) {
    this.$router.push(path);
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
