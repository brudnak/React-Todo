import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super()
    this.state = { todos: [] }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo key={todo.id} todo={todo.todo} />
    ))
    return (
      <div>
        <ul>{todos}</ul>
        <TodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList
