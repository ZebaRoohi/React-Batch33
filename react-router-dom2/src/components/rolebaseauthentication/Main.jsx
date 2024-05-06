import React from 'react'
import { BrowserRouter, Navigate, Route,  Routes } from 'react-router-dom'

const CheckDetails=()=>{
    const userRole='user'
    return userRole
}
//applications
const Admin=()=><h1>Admin Page</h1>
const Home=()=><h1>Home page</h1>
const About=()=><h3>About page</h3>
const User=()=><h3>User page</h3>
const Unauthorized=()=><h1>Unauthorized Page</h1>

const Main = () => {
const userDetails=CheckDetails()
return(
    <BrowserRouter>
    <Routes>
    {userDetails==='admin'&&(
        <>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/unauthorized' element={<Unauthorized />}/>
        <Route path='*' element={<Navigate to='/unauthorized' />}/>
        </>
    )}
    {userDetails==='user'&&(
        <>
        <Route path='/user' element={<User />}/>
        <Route path='/home' element={<Navigate to='/unauthorized' />}/>
        <Route path='/about' element={<Navigate to='/unauthorized' />}/>
        <Route path='*' element={<Navigate to='/unauthorized' />}/>
        </>
    )}
  </Routes>
  </BrowserRouter>
)
}

export default Main
