import React, { useState } from "react"



// const TodoItem = (props) => {

//   const [isCompleted, setIsCompleted] = useState(props.props.completed)
  
//   const click = () => {
//     setIsCompleted(!isCompleted)
//   }

//   return (
//     <div className="todo-item">
//       <input type="checkbox" checked={isCompleted} onChange={click}/>
//       <p style={ { textDecoration: isCompleted ? "line-through" : "none" } }>{props.props.text}</p>
//     </div>
//   )
// }

const TodoItem = (props) => {
  
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.props.completed} onChange={() => props.fonksiyon(props.props.id)}/>
      <p style={ { textDecoration: props.props.completed && "line-through"} }>{props.props.text}</p>
    </div>
  )
}



// const TodoItem = (props) => {

//   return ( 
//     <div className="todo-item">
//       <input type="checkbox" checked={props.props.completed} onChange={ () => {props.fonksiyon(props.props.id)} } />
//       <p style={ { textDecoration: props.props.completed ? "line-through" : "none" } }>{props.props.text}</p>
//     </div>
//   )
// }

// function TodoItem(props) {
  
//   const [isCompleted, setIsCompleted] = useState(props.props.completed)
  
//   return (
//      <div>
//       <input type="checkbox" checked={isCompleted} onChange={ () => { setIsCompleted(!isCompleted) } }/>
//       <p style={ { textDecoration: isCompleted ? "line-through" : "none" } }>{props.props.text}</p>
//     </div> 
//   )
// }











export default TodoItem