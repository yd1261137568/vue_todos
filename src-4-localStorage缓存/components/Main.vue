<template>
  <ul class="todo-main">
    <item v-for="(todo,index) in todos" :key="index" :todo="todo" :deleteTodo="deleteTodo" :index="index"/>
  </ul>
</template>
<script>
  import Item from './Item.vue'
  export default{
    //声明接受父组件传过来的属性或方法,方法一:props:['属性名','方法名']
    props:['todos','deleteTodo'],
    components:{
      Item
    }

  }
</script>
<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
