import React, { useEffect, useState } from 'react'

const ApiUpdate = () => {
    const[data,setData]=useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/users/1')
                const result=await response.json()
                setData(result)
            }catch(err){
                console.log('Eror in fetching the data',err)
            }
        }
        fetchData()
    },[data])
  return (
    <div>
      <h3>Use Effect with Api</h3>
      <p>User name:{data?.name}</p>
      <p>Email:{data?.email}</p>
      <p>Address:{data?.address.city}</p>
    </div>
  )
}

export default ApiUpdate
