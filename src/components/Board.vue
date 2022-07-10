<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="board">
    <h3><span class="title">Title:</span> {{ board.title }}</h3>
    <h4>Visibility: {{ board.visibility }}</h4>
    <h5>Lists:</h5>
    <div v-for="(item, index) in board.lists" :key="index">
      <List :list="board.lists[index]" />
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
export default {
  props: {
    board: [],
  },
  components: {
    List,
  },
};
</script>

<style scoped>
.title {
  color: #f27e2e;
}

.board {
  box-shadow: inset -18px -18px 30px #322f51,
    inset 18px 18px 30px rgba(0, 0, 0, 0.8);
  padding: 20px 0px;
  margin: 20px 100px;

  border-radius: 15px;
}
</style>