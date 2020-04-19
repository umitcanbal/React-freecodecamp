import React from "react"
import FormComponent from "./FormComponent"

class FormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      additionalInfo: {
        isVegetarian: false,
        isOverweight: false,
      },
      isSubmited: false,
    }
  }

  handleClick = () => {
    const {name, value, type, checked} = event.target

    type==="checkbox" ? 
      this.setState({ additionalInfo: { ...this.state.additionalInfo, [name]: checked } }) 
      : 
      this.setState( { [name]: value })
  }

  handleSubmit = () => {
    event.preventDefault()
    this.setState({isSubmited: true})
    const dataEncoded = JSON.stringify(this.state)
    console.log(dataEncoded)
    const dataDecoded = JSON.parse(dataEncoded)
    console.log(dataDecoded)
  }

  render() {
    return(
      <FormComponent 
        {...this.state}
        handleSubmit={this.handleSubmit} 
        handleClick={this.handleClick}
      />
    )
  }
}

export default FormContainer