import React, { useContext } from 'react'
import UserContext from '../context/userinfo/UserContext'

function UserComponent1() {
    const{name,age,setAge}=useContext(UserContext)
  return (
    <div>
      <h3>User Information</h3>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    {/* <button onClick={happyBirthday}>Click Me</button> */}
    <button onClick={()=>setAge(age+1)}>Click age</button>
    </div>
  )
}

export default UserComponent1
