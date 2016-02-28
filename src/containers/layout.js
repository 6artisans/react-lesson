import React from 'react'
import { IndexLink, Link } from 'react-router'

export default (props) => {
  return (
    <div>
      {props.children}
      <footer className="info">
        <p>
          <IndexLink to="/" activeClassName="active">Todos</IndexLink>
          <span className="separator">|</span>
          <Link to="/about" activeClassName="active">About</Link>
        </p>
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
        <p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  )
}
