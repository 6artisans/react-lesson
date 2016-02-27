import React from 'react'
import NewTodo from '../components/new_todo'
import Todos from '../components/todos'
import TodosCounter from '../components/todos_counter'
import { addTodo, newTodoChange } from '../actions'
import reducer from '../reducers'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, text: "Welcome to React Lesson", completed: true},
        {id: 2, text: "Kick off repository with lesson"},
        {id: 3, text: "Run development server"}
      ],
      newTodo: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange(event) {
    const action = newTodoChange(event.target.value)
    const newState = reducer(this.state, action)
    this.setState(newState)
  }

  handleKeyDown(event) {
    // Filter out non enter keys
    if (event.keyCode !== 13) {
      return
    }

    event.preventDefault()

    const newTodo = this.state.newTodo.trim()

    if (newTodo) {
      this.addTodo(newTodo)
    }
  }

  addTodo(text) {
    const todo = {
      id:   this.state.todos.length + 1,
      text: text
    }
    const action = addTodo(todo)
    const newState = reducer(this.state, action)
    this.setState(newState)
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTodo value={this.state.newTodo}
                   onChange={this.handleChange}
                   onSubmit={this.handleKeyDown} />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <Todos todos={this.state.todos} />
        </section>
        <footer className="footer">
          <TodosCounter todos={this.state.todos} />
          <ul className="filters">
            <li>
              <a href="#/" className="selected">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>

      </section>
    )
  }
}
