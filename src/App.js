import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


const App = () => {

  const todoItemComponents = todosData.map( (eachTodoData, index) => {
    return (
      <TodoItem key={index} props={eachTodoData} />
    )
  })

  return (
    <div className="todo-list">
      {todoItemComponents}
    </div>
  )
}

export default App