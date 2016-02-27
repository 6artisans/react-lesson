export const ADD_TODO = 'ADD_TODO'
export const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED'

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    data: {
      todo: todo
    }
  }
}

export const newTodoChange = (text) => {
  return {
    type: NEW_TODO_CHANGED,
    data: {
      newTodo: text
    }
  }
}
