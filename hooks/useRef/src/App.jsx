

import './App.css'
import UseCallbackEx1 from './components/useCallback/UseCallbackEx1'
import UseCallbackEx2 from './components/useCallback/UseCallbackEx2'
import SquareNumber from './components/useMemo/SquareNumber'
import UseMemo from './components/useMemo/UseMemo'
import UseRefExample from './components/useRef/UseRefExample'
import UseRefExample2 from './components/useRef/UseRefExample2'

function App() {


  return (
    <>
   <UseRefExample />
   <h3>use Ref example 2</h3>
   <UseRefExample2 />
   <UseCallbackEx1 />
   <UseCallbackEx2 />
   <UseMemo />
   <SquareNumber />
    </>
  )
}

export default App
