import { ADD_TODO, NEW_TODO_CHANGED } from '../actions'

export default (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      const todos = state.todos
      todos.push(action.data.todo)

      return Object.assign({}, state, {
        todos,
        newTodo: ""
      })

    case NEW_TODO_CHANGED:
      return Object.assign({}, state, {
        newTodo: action.data.newTodo
      })
  }

  return state
}
