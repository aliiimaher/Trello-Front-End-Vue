<template>
  <div class="workspace">
    <h1><span class="name">Name:</span> {{ workspace.name }}</h1>
    <h2>Type: {{ workspace.type }}</h2>
    <h3>Description: {{ workspace.description }}</h3>
    <hr />
    <h2>Boards:</h2>
    <div v-for="(item, index) in workspace.boards" :key="index">
      <Board :board="workspace.boards[index]" />
      <br />
    </div>
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
.workspace {
  background: #1c1a2d !important;
  border-radius: 30px;
  box-shadow: -18px -18px 30px #322f51, 18px 18px 30px rgba(0, 0, 0, 0.8);
  margin: 100px 300px;
  padding: 100px;
}
.name {
  color: #f27e2e;
}
</style>