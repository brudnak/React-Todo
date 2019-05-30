import React, { Component } from 'react'
import TodoList from './components/TodoComponents/TodoList'
import './App.scss'

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h1>
          Todo App <i className='far fa-edit' />
        </h1>
        <TodoList />
      </div>
    )
  }
}

export default App
