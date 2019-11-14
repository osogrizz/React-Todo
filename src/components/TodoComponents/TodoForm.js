import React, { Component } from 'react'

export class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
    console.log(this.state)
  }

  handleAdd = (event) => {
    console.log(event.target.value)
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({
      input: ''
    }) 
  }
 
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.handleAdd} >Add Todo</button>
          <button onClick={this.props.clearTodos} >Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
