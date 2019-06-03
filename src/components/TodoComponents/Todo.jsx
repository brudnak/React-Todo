import React from 'react'
import moment from 'moment'

const Todo = props => {
  return (
    <div className='Todo' onClick={() => props.toggleTodo(props.id)}>
      <li className={`Todo-li ${props.completed ? ' Todo-completed' : ''}`}>
        {props.name} <br /> <p>Created: {moment().format('MMM Do YY')}</p>
      </li>
    </div>
  )
}

export default Todo
