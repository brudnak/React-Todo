import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

class TodoList extends Component {
  constructor(props) {
    super()
    this.state = { todos: [] }
  }

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  toggleTodo = id => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    })
  }

  deleteCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        name={todo.todo}
        id={todo.id}
        completed={todo.completed}
        toggleTodo={this.toggleTodo}
      />
    ))
    return (
      <div className='TodoList-wrapper'>
        <TodoForm
          addTodo={this.addTodo}
          deleteCompleted={this.deleteCompleted}
        />
        <ul className='TodoList-ul'>{todos}</ul>
      </div>
    )
  }
}

export default TodoList
