import React from 'react'

const Greetings = (props) => {
  return (
    <div>
    <h2 style={{color:'blue'}}>Props in React</h2>
     <p>Hello,{props.name}</p> 
     <p>Age is {props.age}</p>
     <p>Course is:{props.course}</p>
    </div>
  )
}

export default Greetings
