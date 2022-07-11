<template>
  <div>
    <p><b>{{ comment.commenterName }}:</b></p>
    <p>{{ comment.text }}</p>

  </div>
</template>

<script>
export default {
  name: "Comment-1",

  methods: {},

  props: {
    comment: [],
  }


}

</script>

<style scoped>

</style>