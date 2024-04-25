import React, { useState } from 'react'
import StateContext from './StateContext'
import StateComponent from '../../components/StateComponent'

export default function StateProvider(){
    const[text,setText]=useState('')
    const[value,setValue]=useState('Initial value')
  return (
    <StateContext.Provider value={{text,value,setText,setValue}}>
        <StateComponent />
    </StateContext.Provider>
  )
}


