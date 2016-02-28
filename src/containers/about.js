import React from 'react'

export default () =>  {
  return (
    <section className="todoapp about">
      <header className="header">
        <h1>todos</h1>
      </header>
      <section className="main">
        <ul className="todo-list">
          <li>
            <label>Simple React lesson</label>
          </li>
          <li>
            <label>Using http://www.todomvc.com</label>
          </li>
        </ul>
      </section>
      <footer className="footer" />
    </section>
  )
}
