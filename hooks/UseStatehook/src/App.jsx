
import './App.css'
import ArrayList from './components/array/ArrayList'
import ArrayNumber from './components/array/ArrayNumber'
import LoginStatus from './components/boolean/LoginStatus'
import Counter from './components/numbers/Counter'
import Null from './components/numbers/Null'
import RandomNumbers from './components/numbers/RandomNumbers'
import Undefined from './components/numbers/Undefined'
import Object from './components/object/Object'
import String from './components/strings/String'
import StringInput from './components/strings/StringInput'

function App() {
  return (
    <>
    <Counter />
    <RandomNumbers />
    <Undefined />
    <Null />
    <String />
    <StringInput />
    <LoginStatus />
    <ArrayList />
    <ArrayNumber />
    <Object />
    </>
  )
}

export default App
