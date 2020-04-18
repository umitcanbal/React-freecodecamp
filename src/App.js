// import React from "react"
import React, { useState } from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import Conditional from "./Conditional"


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: "",
      surname: "",
      textArea: "",
      isAccepted: false,
      gender: "",
      favoriteColor: "",
    }
  }

  handleChange = () => {
    const {name, value, type, checked} = event.target

    type==="checkbox" ? 
    this.setState( { [name]: checked } ) : 
    this.setState( { [name]: value } )
  }

  render() {
    const {firstName, surname, textArea, isAccepted, gender, favoriteColor} = this.state

    return (
      <div>
        
        <form>

          <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} />
          <br /><br />
          <input type="text" name="surname" placeholder="Surname" value={surname} onChange={this.handleChange} />
          <br /><br />
          <textarea name="textArea" placeholder="Write here..." value={textArea} onChange={this.handleChange} />
          <br /><br />
          <label>
            <input type="checkbox" name="isAccepted" checked={isAccepted} value={isAccepted===true ? "on" : "off" } onChange={this.handleChange} />
            I do accept the conditions!
          </label>
          <br /><br />
          <label>
            <input type="radio" name="gender" value="male" onChange={this.handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={this.handleChange} />
            Female
          </label>
          <br /><br />
          <select name="favoriteColor" onChange={this.handleChange}>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>

        </form>  

        <div>

          <p>First Name: {firstName}</p>
          <p>Surname: {surname}</p>
          <p>I would like to say: {textArea} </p>
          <p>I do {isAccepted ? null : "NOT"} accept this</p>
          <p>I am a {gender==="male" ? "man" : "woman"}</p>
          <p>My favorite color: {favoriteColor}</p>

        </div>
        
      </div>
    )
  }
}




































// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       firstName: "",
//       secondName: "",
//       isFriendly: false
//     }
//   }

//   handleChange = (event) => {
//     // console.log("value", event.target.value)
//     // console.log("name", event.target.name)
//     // console.log("checked", event.target.checked)
//     // if (event.target.type === "checkbox") {
//     //   event.target.value = event.target.checked
//     // }
//     const value = event.target.type==="checkbox" ? event.target.checked : event.target.value
    
//     this.setState( {
//       [event.target.name]: value
//     } )
//   }

//   render() {
//     console.log("state", this.state)
//     return (
//       <form>
//         <input 
//           type="text" 
//           value={this.state.firstName} 
//           name="firstName" 
//           placeholder="First Name" 
//           onChange={this.handleChange}
//         />
//         <br />
//         <input 
//           type="text" 
//           value={this.state.secondName} 
//           name="secondName" 
//           placeholder="Last Name" 
//           onChange={this.handleChange}
//         />
//         <br />
//         {/* <textarea value={"default value"} /> */}

//         <input 
//           type="checkbox" 
//           name="isFriendly"
//           checked={this.state.isFriendly} 
//           onChange={this.handleChange}
//         />


//         <h1>{this.state.firstName} {this.state.secondName} </h1>
//       </form>
//     )
//   }
// }






// class App extends React.Component {
  
  // constructor() {
  //   super()
  //   this.state = {
  //     isLoading: true
  //   }
  // }

  // componentDidMount() {
  //   setTimeout( () => {
  //     this.setState( { isLoading: false } )
  //   }, 1500 )
  // }

  // render() {
  //   return ( 
  //     <div>
  //       <Conditional isLoading={this.state.isLoading} />
  //     </div>
  //   )
  // }


  // constructor() {
  //   super()
  //   this.state = {
  //     isLoading: true
  //   }
  // }

  // componentDidMount() {
  //   setTimeout( () => {
  //     this.setState( { isLoading: false } )
  //   }, 1500 )
  // }

  // render() {
  //   return ( 
  //     <div>
  //       {this.state.isLoading ? <Conditional text="loading.." /> : <Conditional text="loading finished" />  }
        
  //     </div>
  //   )
  // }
// }



// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoggedIn: true
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.isLoggedIn ? <p>You are logged in!</p> : <p>Press the button to log in!</p>}
//         <button onClick={ () => {this.setState({isLoggedIn: !this.state.isLoggedIn})} }>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
//       </div>
//     )
//   }
// }



// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   console.log(isLoggedIn);
//   return (
//     <div>
//       {isLoggedIn ? <p>You are logged in!</p> : <p>Press the button to log in!</p>}
//       <button onClick={ () => { setIsLoggedIn(!isLoggedIn) } }>{isLoggedIn ? "Logout!" : "Login!"}</button>
//     </div>
//   )
// }

















// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   handleChange = (id) => {
//     // this.setState( { todos[id-1].completed: !this.state.todos[id-1].completed } )

//     // this.setState( (prevState) => {
//     //   return {
//     //     todos[id-1].completed !prevState.todos[id-1].completed 
//     //   }
//     // } )
//     // console.log(id)
    
//     this.setState( (prevState) => {
//       const updatedTodos = prevState.todos.map( (todo) => {
//         if(todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       })
//       return {
//         todos: updatedTodos
//       }
//     })
//   }

//   render() {
//     const todoComponents = this.state.todos.map( (eachObject) => {
//       return <TodoItem key={eachObject.id} props={eachObject} handleChange={this.handleChange} />
//     })

//     return (
//       <div>
//         {todoComponents}
//       </div>
//     )
//   }

// }




// function App() {

//   function handleClick() {
//     console.log(11)
//   }

//   return (
//     <div>
//       <img 
//         src="https://image.ibb.co/gmmneK/children_593313_340.jpg" 
//         alt="resim çıkmadı" 
//         onMouseOver={handleClick} 
//       />
      
//       <br />
//       <br />
//       <button onClick={handleClick}>Click mejj</button>
//     </div>
//   )
// }



// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   fonksiyon = (id) => {
//     this.setState( (prevState) => {
//       const newTodos = prevState.todos.map( (todo) => {
//         if(todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       } )
//       console.log(newTodos)
//       return {
//         todos: newTodos
//       }
//     } )
//   }

//   render() {
//     const todoComponents = this.state.todos.map( (eachObject) => {
//       return <TodoItem props={eachObject} fonksiyon={this.fonksiyon} key={eachObject.id}/>
//     })

//     return (
//       <div>
//         {todoComponents}
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//   }

//   render() {
//     const todoComponents = this.state.todos.map( (eachTodo) => {
//       return <TodoItem props={eachTodo} key={eachTodo.id}/>
//     } )

//     return (
//       <div>
//         {todoComponents}
//       </div>
//     )
//   }
// }








export default App

