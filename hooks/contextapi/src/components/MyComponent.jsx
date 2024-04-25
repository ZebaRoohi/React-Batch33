import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function MyComponent() {
    const test=useContext(AppContext)
  return (
    <div>
      <p>Example of Context api:{test}</p>
    </div>
  )
}


