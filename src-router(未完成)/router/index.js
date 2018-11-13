//路由器对象模块
import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '../views/About.vue';
import Home from '../views/Home.vue';

//使用声明vue插件
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
