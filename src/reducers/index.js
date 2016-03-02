import { combineReducers } from 'redux'
import newTodo from './new_todo'
import todos from './todos'
import loadingTodo from './loading_todo'

export default combineReducers({
  newTodo,
  todos,
  loadingTodo
})
