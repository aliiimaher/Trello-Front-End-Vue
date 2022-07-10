<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-for="(item, index) in workspaces" :key="index">
    <SmallWorkSpaceCard :name="workspaces[index].name" />
    <!-- <div>{{ workspaces[0].type }}</div> -->
    <button @click="goToWorkspace(index, status)">Go to Workspace</button>
  </div>
</template>

<script>
import axios from "axios";
import SmallWorkSpaceCard from "../components/SmallWorkSpaceCard.vue";
export default {
  // props: {
  //   email: String,
  // },
  components: {
    SmallWorkSpaceCard,
  },
  data() {
    return {
      workspaces: [],
      status: "",
      theWorkspace: [],
    };
  },
  methods: {
    async getMyWorkspaces() {
      const { data, status } = await axios.get(
        "http://localhost:8080/get-userworkspaces"
      );
      this.workspaces = data;
      this.status = status;
      console.log(data);
    },
    goToWorkspace(index, status) {
      console.log(index);
      if (status === 200) {
        this.theWorkspace = this.workspaces[index];
        console.log(this.theWorkspace);
        this.$router.push("/workspace");
        // this.$router.push({
        //   name: "SingleWorkspace",
        //   params: { data: this.theWorkspace },
        // }
        // );
        // this.$router.push({
        //   path: "/workspace",
        //   query: { workspace: this.theWorkspace },
        // });
      }
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