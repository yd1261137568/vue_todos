<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        title:''
      }
    },
    methods:{
      add () {
        //获取输入框中的数据
        const title = this.title.trim();
        //判断数据是否合法
        if(!title){
          return alert('请输入数据')
        }
        //封装一个todo对象
        const todo = {
          title,
          complete:false
        }
        //分发一个自定义事件(事件名:addTodo)******相当于分发消息(事件名,数据),在App标签中绑定事件监听相当于订阅消息(事件名,回调函数)
        this.$emit('addTodo',todo);
        //清空输入框数据
        this.title = ''
      }
    }
  }
</script>
<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
