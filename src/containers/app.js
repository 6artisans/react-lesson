var React = require('react')

var App = React.createClass({
  render: function() {
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
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" checked/>
                <label>Welcome to React Lesson</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li className="">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Kick off repository with lesson</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li className="">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Run development server</label>
                <button className="destroy"></button>
              </div>
            </li>
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
})

module.exports = App
