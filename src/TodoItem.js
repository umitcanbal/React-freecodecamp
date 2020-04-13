import React, { useState } from "react"


const TodoItem = (props) => {

  const [isCompleted, setIsCompleted] = useState(props.props.completed)

  const click = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={isCompleted} onChange={click}/>
      <p style={ { textDecoration: isCompleted ? "line-through" : "none" } }>{props.props.text}</p>
    </div>
  )
}

export default TodoItem