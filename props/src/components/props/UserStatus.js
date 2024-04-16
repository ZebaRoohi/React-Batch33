import React from 'react'

const UserStatus = (props) => {
  return (
    <div>
      <p>User Status is:{props.isLoggedIn?'You Logged In' : 'You Logged out'}</p>
    </div>
  )
}

export default UserStatus
