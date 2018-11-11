<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter />
    </div>
  </div>

</template>
<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import storageUtils from './utils/storageUtils';
  export default{
    data(){
      return {
        todos:[
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:false},
          {title:'打豆豆',complete:false}
        ]
      }
    },
    methods:{
      addTodo(todo){
        //在首行添加todo
        this.todos.unshift(todo);
      },
      //删除todo
      deleteTodo(index){                             //这个index不需要再Main组件中声明接受吗
        this.todos.splice(index,1)
      }
    },
    components:{
      TodoHeader:Header,
      TodoMain:Main,
      TodoFooter:Footer,
    }
  }
</script>
<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
