import React from 'react';
import styled from 'styled-components';
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
      todoList: [],
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

  clearTodos = (event) => {
    event.preventDefault()
    console.log('cleared')
    this.setState({
      todoList: this.state.todoList.filter( todo => {
        return !todo.completed
      })
    })
  }

  toggleComplete = (taskId) => {
    console.log('taskId', taskId)
    this.setState({
      todoList: this.state.todoList.map( todo => {
        if (todo.id === taskId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    })
  }

  componentWillMount() {
      localStorage.setItem('myTodos', JSON.stringify(this.todoList))
      console.log(localStorage)
  }


  render() {
    return (
      <Wrapper>
        <div>
          <h2>Todo List: </h2>
          <TodoForm 
            addTodo={this.addTodo}
            clearTodos={this.clearTodos}
            />
          <TodoList 
            todoList={this.state.todoList} 
            toggleComplete={this.toggleComplete}
          />
        </div>
      </Wrapper>
    );
  }
}

export default App;


const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`