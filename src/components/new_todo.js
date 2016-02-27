import React from 'react'

export default (props) => {
  const {value, onChange, onSubmit} = props

  return <input value={value}
                className="new-todo"
                placeholder="What needs to be done?"
                onChange={onChange}
                onKeyDown={onSubmit}
                autofocus />
}
