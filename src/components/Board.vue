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
  box-shadow: -18px -18px 30px #322f51, 18px 18px 30px rgba(0, 0, 0, 0.8);

  margin: 30px;
  padding: 40px;
  border-radius: 15px;
}
</style>