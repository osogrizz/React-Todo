import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todoList: data,
    }
  }

  addTodo = (itemTask) => {
    console.log(itemTask);
    if (itemTask === '') {
      return null
    } else {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            task: itemTask,
            id: Date.now(),
            completed: false
          }
        ]
      })
    }
  }

  clearTodos = (e) => {
    console.log('cleared')
    this.setState({
      todoList: [
        null
      ]
    })
  }


  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todoList={this.state.todoList} 
          clearTodos={this.clearTodos}
        />
      </div>
    );
  }
}

export default App;
