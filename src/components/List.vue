<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="list">
    <h5>name: {{ list.title }}</h5>
    <div v-for="(item, index) in list" :key="index">
      <Card :card="list.cards[index]" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
  props: {
    list: [],
  },
};
</script>

<style>
.list {
  padding: 20px 40px;
  margin: 50px auto;
  width: 58%;
  box-shadow: -18px -18px 30px #322f51, 18px 18px 30px rgba(0, 0, 0, 0.8);
  border-radius: 15px;
}
</style>