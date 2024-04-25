
import './App.css'
import Counter from './components/Counter'
import MiniProject from './components/MiniProject'
import ApiUpdate from './components/didupdate/ApiUpdate'
import DidUpdate from './components/didupdate/DidUpdate'
import ApiMount from './components/mounting/ApiMount'
import Mount from './components/mounting/Mount'
import ApiUnmounting from './components/umount/ApiUnmounting'
import Unmounting from './components/umount/Unmounting'

function App() {


  return (
    <>
    <Counter />
    <Mount />
    <ApiMount />
    <DidUpdate />
    <ApiUpdate />
   <Unmounting />
   <ApiUnmounting />
   <MiniProject />
    </>
  )
}

export default App
