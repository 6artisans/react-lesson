import React from 'react'
import NewTodo from '../components/new_todo'
import Todos from '../components/todos'
import TodosCounter from '../components/todos_counter'
import * as TodoActions from  '../actions'
import reducer from '../reducers'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange(event) {
    this.props.newTodoChange(event.target.value)
  }

  handleKeyDown(event) {
    // Filter out non enter keys
    if (event.keyCode !== 13) {
      return
    }

    event.preventDefault()

    const newTodo = this.props.newTodo.trim()

    if (newTodo) {
      const todo = {
        id:   this.props.todos.length + 1,
        text: newTodo
      }

      this.props.addTodo(todo)
    }
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTodo value={this.props.newTodo}
                   onChange={this.handleChange}
                   onSubmit={this.handleKeyDown} />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <Todos todos={this.props.todos} />
        </section>
        <footer className="footer">
          <TodosCounter todos={this.props.todos} />
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

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
