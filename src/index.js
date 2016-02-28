import './index.css'

import React from 'react'
import {render} from 'react-dom'
import App from './containers/app'
import { Provider } from 'react-redux'
import { configureStore } from './store'

const initialState = {
  todos: [
    {id: 1, text: "Welcome to React Lesson", completed: true},
    {id: 2, text: "Kick off repository with lesson"},
    {id: 3, text: "Run development server"}
  ],
  newTodo: ""
}

const store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("todos-app-root")
)
