
import './App.css'
import AppProvider from './context/AppProvider'
import CounterProvider from './context/counter/CounterProvider'
import StateProvider from './context/state/StateProvider'
import Inputprovider from './context/task/Inputprovider'
import UserProvider from './context/userinfo/UserProvider'

function App() {

  return (
    <>
   <AppProvider />
   <StateProvider />
   <UserProvider />
   <CounterProvider />
   <Inputprovider />
    </>
  )
}

export default App
