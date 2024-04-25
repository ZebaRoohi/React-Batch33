import React, { useState } from 'react'
import UserContext from './UserContext'
import UserComponent1 from '../../components/UserComponent1'
import UserComponent2 from '../../components/UserComponent2'

const UserProvider = () => {
    const[name,setName]=useState('John Doe')
    const[age,setAge]=useState(1)
    //const happyBirthday=()=>setAge(age+1)

  return (
    <UserContext.Provider value={{name,age,setAge}}>
        <UserComponent1 />
        <UserComponent2 />
    </UserContext.Provider>
  )
}

export default UserProvider
