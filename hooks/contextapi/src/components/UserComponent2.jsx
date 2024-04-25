import React, { useContext } from 'react'
import UserContext from '../context/userinfo/UserContext'

function UserComponent2() {
    const{name,age}=useContext(UserContext)
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  )
}

export default UserComponent2
