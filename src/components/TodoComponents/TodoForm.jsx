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
          <label htmlFor='todo'>New Todo:</label>
          <input
            id='todo'
            type='text'
            placeholder='Enter todo here...'
            value={this.state.todo}
            onChange={this.handleChange}
            name='todo'
            required
          />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
