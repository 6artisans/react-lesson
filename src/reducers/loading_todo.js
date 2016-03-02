import { REQUEST_REMOTE_TODO, RECEIVE_REMOTE_TODO } from '../actions'

export default (loadingTodo = false, action) => {
  switch(action.type) {
    case REQUEST_REMOTE_TODO:
      return true

    case RECEIVE_REMOTE_TODO:
      return false
  }

  return loadingTodo
}
