import React from 'react'
import styled from 'styled-components'
import './Todo.css'

const Todo = (props) => {
  const handleClick = (evt) => {
    console.log('target', evt.target)
    evt.target.classList.toggle('complete')
    props.toggleComplete(props.id)
  }

  return (
    <Item onClick={handleClick} >
      {props.task}
    </Item>
  )
}

export default Todo

const Item = styled.div`
  width: 200px;
  padding: 20px 25px;
  border: 1px solid gray;
  margin: 20px;
  text-transform: uppercase;
`
