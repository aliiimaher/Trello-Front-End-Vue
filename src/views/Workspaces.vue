<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    // eslint-disable-next-line vue/require-v-for-key
    <h1 v-for="item in data">{{ item }}</h1>
    <p></p>
    <!-- <button @click="getMyWorkspaces">Show my workspaces</button> -->

    <h2>{{ email }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    email: String,
  },
  components: {
    ///
  },
  data() {
    return {};
  },
  methods: {
    async getMyWorkspaces() {
      const { data } = await axios.get(
        "http://localhost:8080/get-userworkspaces"
      );

      console.log(data);
    },
  },
  async created() {
    this.kir = await this.getMyWorkspaces();
    // await this.postData()
  },
};
</script>


<style>
</style>