import React, { useState } from 'react'
import useBackground from './Color'

const BackgroundColor = () => {
    const[color,setColor]=useState('cyan')
    useBackground(color)
  return (
    <div>
      <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} />
    </div>
  )
}

export default BackgroundColor
