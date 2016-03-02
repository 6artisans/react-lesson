import fetch from 'isomorphic-fetch'

export const ADD_TODO = 'ADD_TODO'
export const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED'
export const REQUEST_REMOTE_TODO = 'REQUEST_REMOTE_TODO'
export const RECEIVE_REMOTE_TODO = 'RECEIVE_REMOTE_TODO'

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

export const requestRemoteTodo = () => {
  return {
    type: REQUEST_REMOTE_TODO
  }
}

export const receiveRemoteTodo = (todo) => {
  return {
    type: RECEIVE_REMOTE_TODO,
    data: {
      todo: todo
    }
  }
}

export const fetchRemoteTodo = () => {
  return (dispatch) => {
    dispatch(requestRemoteTodo())

    // Delay response for better demonstration
    setTimeout(() => {
      // Random bacon ipsum api
      const url = 'https://baconipsum.com/api/?type=all-meat&paras=1&sentences=1&start-with-lorem=1'

      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          dispatch(receiveRemoteTodo({
            id: +(new Date),
            text: response[0]
          }))
        })
    }, Math.random() * 2000)
  }
}
