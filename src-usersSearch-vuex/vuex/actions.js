//处理异步代码(ajax请求)

import axios from 'axios';
import {
  REQUIREING,
  REQUIRE_SUCCESS,
  REQUIRE_FAIL
} from './mutation-types';

export default {
 /* mounted(){
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
  }*/
  async search ({commit},searchName) {
    //更新状态(请求中...)
    commit(REQUIREING);
    //用axios发送ajax请求,获取数据
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
      commit(REQUIRE_SUCCESS,{users})

    } catch(e) {
      commit(REQUIRE_FAIL,{errMeg})
    }
  }
}
