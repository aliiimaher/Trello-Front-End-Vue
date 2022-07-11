<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="list">
    <h3>name: {{ list.title }}</h3>
    <div class="grid" v-for="(item, index) in list.cards" :key="index">
      <Card class="col-12" :card="list.cards[index]" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  methods: {},
  props: {
    list: [],
  },
};
</script>

<style>
.list {
  /*
  padding: 20px 40px;
  margin: 50px auto;
  width: 58%;
  border-radius: 15px;
    box-shadow: -18px -18px 30px #322f51, 18px 18px 30px rgba(0, 0, 0, 0.8);
  */
  /*
  border: solid #757272 1px;
  margin: -1px -1px -1px -1px;


*/

  /*margi*/

  /*border: solid #8d6f6f 1px;*/
}
</style>