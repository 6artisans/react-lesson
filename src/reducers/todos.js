import { ADD_TODO, RECEIVE_REMOTE_TODO } from '../actions'

export default (todos = [], action) => {
  switch(action.type) {
    case ADD_TODO:
    case RECEIVE_REMOTE_TODO:
    return [
      ...todos,
      action.data.todo
    ]
  }

  return todos
}
