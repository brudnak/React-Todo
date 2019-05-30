import React from 'react'

const Todo = props => {
  return (
    <div onClick={() => props.toggleTodo(props.id)}>
      <li>{props.name}</li>
    </div>
  )
}

export default Todo
