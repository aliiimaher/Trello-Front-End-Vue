<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <h4>{{ card.title }}</h4>
    <p>{{ card.description }}</p>
    <!-- checklist -->
    <!-- users -->
    <p>{{ card.comment }}</p>
    <p>{{ card.label }}</p>
  </div>
</template>

<script>
export default {
  components: {},

  methods: {},

  props: {
    card: [],
  },
};
</script>

<style>
p {
  font-size: 10px;
}

.card {
  box-shadow: inset -5px -5px 10px #322f51,
    inset 5px 5px 10px rgba(0, 0, 0, 0.8);
  padding: 10px 0px;
  margin: 30px 30px;
  border-radius: 15px;
}
</style>