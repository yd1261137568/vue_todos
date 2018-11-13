
//store是vuex最核心的管理对象

import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);
//相当于data的对象,定义初始化数据
const state = {
  count:2
};
//包含n个直接更新state数据方法的对象
const mutations = {
  INCREMENT (state) {
    state.count ++ ;
  },
  DECREMENT (state) {
    state.count -- ;
  }
};
const actions = {
  increment ({commit}) {  //increment()里面传的是一个对象,这里只需要commit,所以需要解构赋值
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit , state}) {
    if(state.count % 2 === 1){
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    },1000)

  },
};
const getters = {
  evenOrAdd (state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
};

export default new Vuex.Store ({
  state,
  mutations,
  actions,
  getters
})
