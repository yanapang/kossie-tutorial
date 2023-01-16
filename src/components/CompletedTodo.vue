<template>
  <div>
    Completed Todo: {{ numberOfCompletedTodo }}
  </div>

</template>

<script>
export default {
  name: "CompletedTodo",
  computed:{
    // todos(){
    //   return this.$store.state.todos;
    // },
    numberOfCompletedTodo(){
      return this.$store.getters["todo/numberOfCompletedTodo"];
    },
  }
}
</script>

<style scoped>

</style>