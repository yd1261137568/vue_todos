
import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_COMPLETE_TODOS,
  SELECT_ALL_TODOS
} from './mutation-types';

export default {
  addTodo ({commit},todo) {
    commit(ADD_TODO,{todo})
  },
  deleteTodo ({commit},index) {
    commit(DELETE_TODO,{index})
  },
  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },
  selectAllTodos ({commit},isComplete) {
    commit(SELECT_ALL_TODOS,{isComplete})
  }

}
