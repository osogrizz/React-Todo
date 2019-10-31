// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'



const TodoList = (props) => {
  console.log(props)
  return (
    <div>
      {props.todoList.map( item => {
        return (
          item ? <Todo key={item.id} task={item.task} completed={item.completed} /> : null
        )
      })}
      <button onClick={props.clearTodos} >Clear Todo's</button>
    </div>
  )
}

export default TodoList

