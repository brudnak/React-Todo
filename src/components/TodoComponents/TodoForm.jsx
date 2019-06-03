import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './Todo.scss'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { todo: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.todo === '') {
      return
    } else {
      this.props.addTodo({ ...this.state, id: uuid(), completed: false })
      this.setState({ todo: '' })
    }
  }

  render() {
    return (
      <div className='TodoForm-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter todo here...'
            value={this.state.todo}
            onChange={this.handleChange}
            name='todo'
            required
          />
          <button type='submit' id='add'>
            <i className='fas fa-plus' />
          </button>
          <button
            type='button'
            id='delete'
            onClick={this.props.deleteCompleted}
          >
            <i className='fas fa-trash-alt' />
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm
