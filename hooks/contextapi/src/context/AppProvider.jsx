import React from 'react'
import AppContext from './AppContext'
import MyComponent from '../components/MyComponent'

const AppProvider = () => {
    const str="My Context Value"
  return (
  <AppContext.Provider value={str}>
    <MyComponent/>
  </AppContext.Provider>
  )
}

export default AppProvider
