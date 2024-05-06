
import './App.css'
// import ButtonClick from './components/hoc/ButtonClick'
import React,{ Suspense, lazy } from 'react'
const HomePage=lazy(()=>import('./components/lazyloading/Home'))
const AboutPage=lazy(()=>import('./components/lazyloading/About'))
function App() {
  return (
    <>
    {/* <ButtonClick /> */}
  <Suspense fallback={
    <div>Please wait.....</div>}>
    <HomePage />
    </Suspense>
    <Suspense fallback={
      <div>Please wait about is loading...</div>
    }>
    <AboutPage />
    </Suspense>
    
    </>
  )
}

export default App
