<template>
  <div>
    <to-do
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
    />
  </div>

</template>

<script>
import ToDo from "@/components/Todo.vue";
export default {
  name: "TodoList",
  components:{
    ToDo,
  },
  computed:{
    todos(){
      return this.$store.state.todo.todos;
    }
  },
  methods:{
    toggleCheckbox(value){
      this.$emit('toggle-checkbox',value)
    },
    deleteTodo(todoId){
      this.$emit('click-delete', todoId);
    }
  }
}
</script>

<style scoped>

</style>