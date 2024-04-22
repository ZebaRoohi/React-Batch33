/*import React, { useState } from 'react'

const ArrayList = () => {
    const[fruits,setFruits]=useState(['apple','banana','orange'])
    const addFruit=()=>{
        setFruits([...fruits,'New Fruit'])
    }
  return (
    <div>
      <h3>Array List</h3>
      <ul>
      {fruits.map((fruit,index)=>(
        <li key={index}>{fruit}</li>
      ))}
     </ul>
      <button type='button' onClick={addFruit}>Add Fruit</button>
     
    </div>
  )
}

export default ArrayList*/

import React, { useState } from 'react'

const ArrayList = () => {
    const[items,setItems]=useState(['apple','orange','banana'])
    const[newItem,setNewItem]=useState('')
    const addItems=()=>{
        setItems([...items,newItem])
        setNewItem('')
    }

    const handleChange=(e)=>{
        setNewItem(e.target.value)
    }

  return (
    <div>
        <ul>
      {items.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
</ul>
      <input type='text' value={newItem} onChange={handleChange} />
      <button onClick={addItems}>Add Item</button>
    </div>
  )
}

export default ArrayList

