<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-for="(item, index) in workspaces" :key="index">
    <WorkSpace :workspace="workspaces[index]" />
    <!-- <div>{{ workspaces[0].type }}</div> -->
    <!-- <button @click="showWorkspace(index, status)">Go to Workspace</button> -->
    <!-- <p v-bind="workspaces[index].visibility"></p> -->
  </div>
</template>

<script>
import axios from "axios";
import WorkSpace from "../components/WorkSpace.vue";
export default {
  // props: {
  //   email: String,
  // },
  components: {
    WorkSpace,
  },
  data() {
    return {
      workspaces: [],
      status: "",
      theWorkspace: [],
      isVisible: false,
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
    showWorkspace(index, status) {
      console.log(index);
      if (status === 200) {
        this.theWorkspace = this.workspaces[index];
      }
    },
  },

  async created() {
    this.kir = await this.getMyWorkspaces();
    // await this.postData()
  },
};
</script>


<style scoped>
WorkSpace {
  border-bottom-color: #009900;
}
</style>