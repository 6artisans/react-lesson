import { combineReducers } from 'redux'
import newTodo from './new_todo'
import todos from './todos'

export default combineReducers({
  newTodo,
  todos
})
