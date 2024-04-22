import React, { useState } from 'react'

const LoginStatus = () => {
    const[signed,setSigned]=useState(true)
    const handleSign=()=>{
        setSigned()
    }
    const handleSignout=()=>{
        setSigned()
    }
  return (
    <div>
      <h3>Login Status of User</h3>
      {signed?(<div>
      <button type='button' onClick={handleSign}>SignIn</button><p>Welcome back User</p></div>)
        : ( <div><button type='button' onClick={handleSignout}>SignOut</button><p>Please Sign In back</p></div>
      )
}
    </div>
  )
}

export default LoginStatus
