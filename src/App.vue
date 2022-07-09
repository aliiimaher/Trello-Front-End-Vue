<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <StartPage />
    <!-- <router-link to="/login">Log in</router-link>
    <router-link to="/sign-up">Sign Up</router-link> -->
    <router-view></router-view>
  </div>
  <!-- <nav> -->
  <!-- <router-link to="/">Home</router-link> -->
  <!-- <router-link to="/login">Log in</router-link>
  <router-link to="/sign-up">Sign Up</router-link> -->
  <!-- </nav> -->
</template>

<script>
import StartPage from "./views/StartPage.vue";

export default {
  components: {
    StartPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
