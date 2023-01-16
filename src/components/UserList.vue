<template>
  <div>
    User List
    <hr>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: "UserList",
  created(){
    this.getUsers();
  },
  computed:{
    ...mapState('user', {
      users: state => state.users
    })
    // users(){
    //   return this.$store.state.users;
    // }
  },
  methods:{
    ...mapActions('user', ['getUsers'])
    // getUsers(){
    //   this.$store.dispatch('getUsers');
    // }
  }
}
</script>

<style scoped>

</style>