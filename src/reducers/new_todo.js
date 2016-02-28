import { ADD_TODO, NEW_TODO_CHANGED } from '../actions'

export default (newTodo, action) => {
  switch(action.type) {
    case ADD_TODO:
      return ""

    case NEW_TODO_CHANGED:
      return action.data.newTodo
  }

  return newTodo
}
