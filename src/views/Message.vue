<template>
  <div>
    <ul>
      <li v-for="(item,index) in messages" :key="item.id">
        <router-link :to="`/home/message/detail/${item.id}`">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
  export default {
    data () {
      return {
        messages:[]
      }
    },
    mounted(){
      setTimeout(() => {
        const messages = [
          {id:1,title:'message001'},
          {id:3,title:'message003'},
          {id:5,title:'message005'},
        ]
        //更新数据
        this.messages = messages;
      },1000)
    }
  }
</script>
<style scoped>

</style>
