
import './App.css'
import BackgroundColor from './components/CustomHook/BackgroundColor'
import StatusDisplay from './components/CustomHook/StatusDisplay'
import CounterReducer from './components/useReducer/CounterReducer'
import DisplayInfo from './components/useReducer/DisplayInfo'

function App() {


  return (
    <>
<CounterReducer />
<DisplayInfo />
<BackgroundColor />
<StatusDisplay />
    </>
  )
}

export default App
