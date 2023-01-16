<template>
  <div>
    <input type="checkbox">
    <span class="m-lg-3">{{ todo.text }}</span>
    <button
      class="btn btn-danger btn-sm"
      @click="clickDelete"
    >Delete</button>
    {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props:{
    todo: {
      type:Object,
      required:true,
    }
  },
  computed:{
    numberOfCompletedTodo(){
      return this.$store.getters['todo/numberOfCompletedTodo'];
    },
  },
  methods:{
    toggleCheckbox(e){
      this.$store.dispatch('todo/toggleTodo', {
        id:this.todo.id,
        checked:e.target.checked,
      });
    },
    clickDelete(){
      this.$store.dispatch('todo/deleteTodo', this.todo.id);
      // this.$store.commit('DELETE_TODO', this.todo.id);
      // this.$emit('click-delete', this.todo.id);
    }
  }
}
</script>

<style scoped>

</style>