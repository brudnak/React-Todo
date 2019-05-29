import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <div>
        <li>{this.props.todo}</li>
      </div>
    )
  }
}

export default Todo
