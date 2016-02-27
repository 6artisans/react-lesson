import React from 'react'

const renderTodo = (todo) => {
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

export default (props) => {
  const {todos} = props

  return (
    <ul className="todo-list">
      {todos.map(renderTodo)}
    </ul>
  )
}
