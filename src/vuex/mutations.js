
import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_COMPLETE_TODOS,
  SELECT_ALL_TODOS
} from './mutation-types';
export default {
  [ADD_TODO] (state,{todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state,{index}) {
    state.todos.splice(index,1)
  },
  [DELETE_COMPLETE_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [SELECT_ALL_TODOS] (state,{isComplete}) {
    state.todos.forEach(todo => todo.complete = isComplete);
  }

}
