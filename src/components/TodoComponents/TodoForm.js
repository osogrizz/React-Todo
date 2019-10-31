import React, { Component } from 'react'

export class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      input: evt.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({
      input: ''
    })

  }

 
  render() {
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.input}/>
          <button>Add Todo</button>
        </form>
        
      </div>
    )
  }
}

export default TodoForm
