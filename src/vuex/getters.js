

export default {
  //已完成数量
  completeSize(state){
    return state.todos.reduce((pre,todo) => pre + (todo.complete ? 1 : 0 ),0);
  },
  //总数量
  totalSize (state) {
    return state.todos.length
  },
  isCheckAll (state,getters) {
    return state.todos.length === getters.completeSize && getters.completeSize >0;
  }
}
