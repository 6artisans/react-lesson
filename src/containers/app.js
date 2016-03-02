import React from 'react'
import NewTodo from '../components/new_todo'
import Todos from '../components/todos'
import TodosCounter from '../components/todos_counter'
import * as TodoActions from  '../actions'
import reducer from '../reducers'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleRemoteTodo = this.handleRemoteTodo.bind(this)
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

  handleRemoteTodo(event) {
    event.preventDefault()
    this.props.fetchRemoteTodo()
  }

  render() {
    let addRemoteTodo

    if(this.props.loadingTodo) {
      addRemoteTodo = <span>Loding API</span>
    } else {
      addRemoteTodo = <a href="#" onClick={this.handleRemoteTodo}>Add remote TODO</a>
    }

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          {addRemoteTodo}
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
          <TodosCounter count={this.props.activeTodosCount} />
          <ul className="filters">
            <li>
              <IndexLink to="/" activeClassName="selected">All</IndexLink>
            </li>
            <li>
              <Link to="/active" activeClassName="selected">Active</Link>
            </li>
            <li>
              <Link to="/completed" activeClassName="selected">Completed</Link>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>

      </section>
    )
  }
}

function mapStateToProps({ todos, newTodo, loadingTodo }, props) {
  const filter = props.routeParams.filter
  const activeTodos = todos.filter(({ completed }) => !completed)
  let filteredTodos

  if(!filter) {
    filteredTodos = todos
  } else {
    if(filter == "completed") {
      filteredTodos = todos.filter(({ completed }) => completed)
    } else {
      filteredTodos = activeTodos
    }
  }

  return {
    newTodo,
    todos: filteredTodos,
    activeTodosCount: activeTodos.length,
    loadingTodo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
