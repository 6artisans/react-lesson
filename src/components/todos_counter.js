import React from 'react'

export default (props) => {
  const {todos} = props

  const uncompletedTodos = todos.filter((todo) => !todo.completed)
  const uncompletedTodosCount = uncompletedTodos.length

  return (
    <span className="todo-count">
      <strong>{uncompletedTodosCount}</strong>
      {uncompletedTodosCount == 1 ? " item" : " items"} left
    </span>
  )
}
