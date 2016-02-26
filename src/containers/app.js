import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, text: "Welcome to React Lesson", completed: true},
        {id: 2, text: "Kick off repository with lesson"},
        {id: 3, text: "Run development server"}
      ]
    }
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

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {this.state.todos.map(this.renderTodo)}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count"></span>
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
