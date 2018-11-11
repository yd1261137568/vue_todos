<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>
<script>
  export default{
    props:{
      todos:Array,
      deleteCompleteTodos:Function,
      selectAllTodos:Function
    },
    computed:{
      //计算全选的数量
      completeSize(){
        return this.todos.reduce((pre,todo) => pre + (todo.complete ? 1 : 0 ),0);
      },
      //判断是否选择并且同步修改所有已选择的todo
      isCheckAll:{
        //已完成数量===todo的length时,自动勾选下面的钩
        get(){
          return this.todos.length === this.completeSize && this.completeSize >0;
        },
        //打钩后全选todo
        set(value){
          this.selectAllTodos(value);
        }
      }
    }

  }
</script>
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
