import React, { useEffect, useState } from 'react'

const ApiUnmounting = () => {
    const[data,setData]=useState([])
    
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/todos')
                const result=await response.json()
                setData(result)
            }catch(err){
                console.log('Err in fetching data',err)
            }
        }
        fetchData()

    //Unmounting
        return()=>{
            console.log('Data is unmounting')
            setData([])
        }
    },[])
  return (
    <div>
        <h3>Api with unmounting</h3>
        <ul>
            {data.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    
    </div>
  )
}

export default ApiUnmounting
