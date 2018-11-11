<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader />
      <TodoMain :todos="todos"/>
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
