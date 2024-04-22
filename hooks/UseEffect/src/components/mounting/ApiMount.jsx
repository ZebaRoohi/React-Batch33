import React, { useEffect, useState } from 'react'

const ApiMount = () => {
    const[data,setData]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
            const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const result=await response.json()
            setData(result)
        }catch(err){
            console.log('Error in fetching Information',err)
        }
        }
        fetchData()
    },[])

  return (
    <div>
      <h3>Mounting with api</h3>
      <p>Title:{data?.title}</p>
    </div>
  )
}

export default ApiMount
