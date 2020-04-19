import React from "react"

function FormComponent(props) {
  console.log(props)
  const {firstName, lastName, age, gender, destination, additionalInfo, isSubmited} = props

    return (
      <main>
        <form onSubmit={props.handleSubmit}>

          ***<input placeholder="First Name" name="firstName" value={firstName} onChange={props.handleClick} required/><br />
          ***<input placeholder="Last Name" name="lastName" value={lastName} onChange={props.handleClick} required/><br />
          <input placeholder="Age" name="age" value={age} onChange={props.handleClick} /><br /><br />

          ***<label>
            <input type="radio" name="gender" value="male" checked={gender==="male"} onChange={props.handleClick} required/> Male
            </label>
          <label>
            <input type="radio" name="gender" value="female" checked={gender==="female"} onChange={props.handleClick} required/> Female
          </label><br /><br />

          ***<select name="destination" defaultValue="" onChange={props.handleClick} required>
            <option disabled value="">Choose your destination</option>
            <option value="Prague">Prague</option>
            <option value="İstanbul">İstanbul</option>
          </select><br /><br />

          <label><input type="checkbox" name="isVegetarian" checked={additionalInfo.isVegetarian} onChange={props.handleClick} /> I am vegetarian</label><br />
          <label><input type="checkbox" name="isOverweight" checked={additionalInfo.isOverweight} onChange={props.handleClick} /> I am overweight</label><br /><br />

          <button>Submit</button><br /><br /><br />

        </form>
        {isSubmited &&
          <div>
            <h2>Entered information:</h2>
            <p>Your name: {firstName} {lastName}</p>
            <p>Your age: {age}</p>
            <p>Your gender: {gender}</p>
            <p>Your destination: {destination}</p>
            <p>Your dietary restrictions: </p>
            <p>Vegetarian: {additionalInfo.isVegetarian ? "Yes" : "No"}</p>
            <p>Overweight: {additionalInfo.isOverweight ? "Yes" : "No"}</p>
          </div>
        }

      </main>
    )
}

export default FormComponent