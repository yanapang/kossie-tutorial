export default {
    namespace: true,
    state:{
        todos:[
            {id:1, text:'buy a car', checked:false},
            {id:2, text:'rent a bus', checked:false},
        ],
    },
    mutations:{
        ADD_TODO(state, value){
            state.todos.push({
                id:Math.random(),
                text:value,
                checked:false,
            })
        },
        TOGGLE_TODO(state, {id, checked}){
            const index = state.todos.findIndex(todo=>{
                return todo.id===id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId){
            const index = this.todos.findIndex(todo=>{
                return todo.id ===todoId;
            });
            state.todos.splice(index, 1);

        },
    },
    actions:{
        addTodo({ commit }, value){
            setTimeout(function(){
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({commit}, payload){
            //payload === 데이터
            setTimeout(function(){
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({commit}, todoId){
            setTimeout(function(){
                commit('DELETE_TODO', todoId);
            }, 500);
        },

    },
    getters:{
        numberOfCompletedTodo : state => {
            state.todos.filter(todo => todo.checked).length;
        }

    },

}