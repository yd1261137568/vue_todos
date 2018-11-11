<template>
  <div>
    <h2 v-show="firstView">请输入关键字....</h2>
    <h2 v-show="Loading">Loading......</h2>
    <h2 v-show="errMeg">{{errMeg}}</h2>
    <div class="row" v-show="users.length">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Pubsub from 'pubsub-js';
  import axios from 'axios';
  export default {
    data(){
      return {
        firstView:true,
        Loading:false,
        users:[],
        errMeg:''
      }
    },
    mounted(){
      //订阅消息
      Pubsub.subscribe('search',async (meg,searchName) => {
        //更新状态
        this.firstView=false;
        this.Loading=true;
        this.users=[];
        this.errMeg='';
        //发送ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`;

        try {
          const res = await axios.get(url);
          console.log(res);
          const result = res.data;
          const users = result.items.map(item => ({
            name:item.login,
            url:item.html_url,
            avatar_url: item.avatar_url
          }))
          //更新数据
          this.Loading = false;
          this.users = users;
        } catch(e) {
          this.Loading = false;
          this.errMeg = '网络不稳定,请刷新重试~'
        }
      })


    }
  }
</script>
<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
