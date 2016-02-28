import { createStore } from 'redux'
import reducer from '../reducers'

export const configureStore = (initialState) => {
  const store = createStore(reducer, initialState)

  return store
}
