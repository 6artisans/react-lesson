import './index.css'

import React from 'react'
import {render} from 'react-dom'
// Application
import Layout from './containers/layout'
import App from './containers/app'
import About from './containers/about'

import { Provider } from 'react-redux'
import { configureStore } from './store'
// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

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
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={App} />
        <Route path='/about' component={About} />
        {/* TODO: do option param like in rails path='(/:filter)' */}
        <Route path='/:filter' component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("todos-app-root")
)
