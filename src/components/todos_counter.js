import React from 'react'

export default ({ count }) => {
  return (
    <span className="todo-count">
      <strong>{count}</strong>
      {count == 1 ? " item" : " items"} left
    </span>
  )
}
