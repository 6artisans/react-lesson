import React from 'react'

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
    this.setState({newTodo: event.target.value})
  }

  handleKeyDown(event) {
    // Filter out non enter keys
    if (event.keyCode !== 13) {
      return
    }

    event.preventDefault()

    const newTodo = this.state.newTodo.trim()

    if (newTodo) {
    	this.setState({ newTodo: '' })
      this.addTodo(newTodo)
    }
  }

  addTodo(text) {
    const todos = this.state.todos

    todos.push({
      id:   todos.length + 1,
      text: text
    })

    this.setState({ todos: todos })
  }

  renderTodo(todo) {
    return (
      <li key={todo.id} className={todo.completed && "completed"}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!!todo.completed} />
          <label>{todo.text}</label>
          <button className="destroy"></button>
        </div>
      </li>
    )
  }

  renderCounter() {
    const uncompletedTodos = this.state.todos.filter((todo) => !todo.complete)
    const uncompletedTodosCount = uncompletedTodos.length

    return (
      <span className="todo-count">
        <strong>{uncompletedTodosCount}</strong>
        {uncompletedTodosCount == 1 ? " item" : " items"} left
      </span>
    )
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input value={this.state.newTodo}
                 className="new-todo"
                 placeholder="What needs to be done?"
                 onChange={this.handleChange}
                 onKeyDown={this.handleKeyDown}
                 autofocus />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {this.state.todos.map(this.renderTodo)}
          </ul>
        </section>
        <footer className="footer">
          {this.renderCounter()}
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
