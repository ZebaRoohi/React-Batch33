import React, { useState } from 'react'
import useStatus from './Status'

const StatusDisplay = () => {
    const[online,setOnline]=useState(true)
    useStatus(online)
  return (
    <div>
      <p>Status:{online?'Online':'Offline'}</p>
      <button onClick={()=>setOnline(true)}>Online</button>
      <button onClick={()=>setOnline(false)}>Offline</button>
    </div>
  )
}

export default StatusDisplay
