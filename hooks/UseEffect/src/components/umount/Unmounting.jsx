import React, { useEffect, useState } from 'react'

const Unmounting = () => {
    const[isActive,setIsActive]=useState(false)
    useEffect(()=>{
        console.log('Data is mounting')
        setIsActive(true)
        return()=>{
            console.log('Data is unmounting')
            console.log('Compount will get unmount')
        }
    },[])
  return (
    <div>
      <h3>Unmounting with useEffect</h3>
      <p>User status:{isActive?'Active':'Inactive'}</p>
    </div>
  )
}

export default Unmounting
