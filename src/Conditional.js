import React from "react"

const Conditional = (props) => {
  // if(props.isLoading) {
  //   return (
  //     <p>Yüklüyooom</p>
  //   )
  // }
  // return (
  //   <p>Yüklemem bitteey</p>
  // )

  
  // return (
  //   <p>{props.isLoading ? "Yüklüyooom" : "Yüklemem bitteey"}</p>
  // )

  return (
    <p>{props.text}</p>
  )

  // return (
  //   <div>
  //     <p>{props.isLoading && "Yüklüyoom"}</p>
  //     <p>{!props.isLoading && "Yüklemem bitteeey"}</p>
  //   </div>
  // )
}

export default Conditional