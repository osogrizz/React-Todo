// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'



const TodoList = (props) => {
  console.log(props)
  return (
    <div>
      { 
        props.todoList.map( todo => {
          return (
            todo ? <Todo key={todo.id} task={todo.task} completed={todo.completed} id={todo.id} toggleComplete={props.toggleComplete} /> : null
          )
        })
      
      } 
    </div>
  )
}

export default TodoList

