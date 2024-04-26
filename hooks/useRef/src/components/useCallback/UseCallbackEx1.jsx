import React, { useCallback, useState } from 'react'

const UseCallbackEx1 = () => {
    const[items,setItems]=useState(['item1','item2'])
    const handleClick = useCallback(
        (item) => {
          console.log(`You clicked ${item}`);
        },
        [],
      );

  return (
    <div>
      <h2>Example of useCallback()</h2>
      <ul>
        {items.map((item)=>(
            <li key={item} onClick={()=>handleClick(item)}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseCallbackEx1
