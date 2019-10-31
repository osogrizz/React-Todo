import React from 'react'

const Todo = (props) => {
  const handleClick = () => {
    props.toggleComplete(props.id)
  }

  return (
    <div onClick={handleClick} >
      <p>{props.task}</p>
    </div>
  )
}

export default Todo
