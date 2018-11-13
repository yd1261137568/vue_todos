<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{totalSize}}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="$store.dispatch('deleteCompleteTodos')">清除已完成任务</button>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default{

    computed:{
      ...mapGetters(['completeSize','totalSize']),
      //判断是否选择并且同步修改所有已选择的todo
      isCheckAll:{
        //已完成数量===todo的length时,自动勾选下面的钩
        get(){
          return this.$store.getters.isCheckAll
        },
        //打钩后全选todo
        set(value){
          this.$store.dispatch('selectAllTodos',value)
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
