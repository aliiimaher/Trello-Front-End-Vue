<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <h4>{{ card.title }}</h4>
    <p>{{ card.description }}</p>
    <!-- checklist -->
    <!-- users -->
     <div v-for="(item, index) in card.comments" :key="index">
       <Comment :comment="card.comments[index]" />
     </div>
    <p>{{ card.label }}</p>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
export default {
  components: {
    Comment
  },

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
  /*
  box-shadow: inset -5px -5px 10px #322f51,
    inset 5px 5px 10px rgba(0, 0, 0, 0.8);
  padding: 10px 0px;
  margin: 30px 30px;
  border-radius: 15px;
  */
  border: solid #b4b4b4 0.5px;
  margin-top: 8px;

}
</style>