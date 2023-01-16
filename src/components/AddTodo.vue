<template>
  <input type="text"
         class="w-100 p-2"
         placeholder="Type todo"
         @keyup.enter="addTodo"
  >

</template>

<script>
export default {
  name: "AddTodo",
  data(){
    return{
      todoText:'',
    }
  },
  methods:{
    addTodo(e){
      // this.$emit('add-todo', e.target.value);
      this.$store.commit('todo/ADD_TODO', e.target.value);
      this.todoText='';
    }
  }
}
</script>

<style scoped>

</style>