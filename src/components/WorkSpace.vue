<template>
  <div>
    <h1>Name: {{ workspace.name }}</h1>
    <h2>Type: {{ workspace.type }}</h2>
    <h5>Description: {{ workspace.description }}</h5>
    <Board
      :board="workspace[index].board"
      v-for="(item, index) in workspaces"
      :key="index"
    />
  </div>
</template>

<script>
import Board from "./Board.vue";
export default {
  components: {
    Board,
  },
  props: {
    // name: String,
    workspace: [],
  },
};
</script>

<style scoped>
div {
  border-bottom-style: solid;
}
</style>