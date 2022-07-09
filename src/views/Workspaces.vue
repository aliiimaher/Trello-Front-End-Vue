<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Hello Mother fucker</h1>
    <p></p>
    <button @click="getMyWorkspaces">Show my workspaces</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    ///
  },
  methods: {
    async getMyWorkspaces() {
      const { data } = await axios.get("http://localhost:8080/getusers");

      console.log(data);
    },
  },
};
</script>


<style>
</style>