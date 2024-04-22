import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example3 from '../Admin'

function App() {
  const propValue = 'Hello from ParentComponent!';

  return (
    <>
     <Example3  userId={1}/> 
    </>
  )
}

export default App
