import newTodo from './new_todo'
import todos from './todos'

export default (state, action) => {
  return {
    newTodo: newTodo(state.newTodo, action),
    todos:   todos(state.todos, action)
  }
}
