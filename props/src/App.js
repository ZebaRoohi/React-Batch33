import logo from './logo.svg';
import './App.css';
import Greetings from './components/props/Greetings';
import UserStatus from './components/props/UserStatus';
import ParentComponent from './components/props/ParentComponent';
import ArrayParent from './components/props/ArrayParent';
import ObjectParent from './components/props/ObjectParent';
import Parent from './components/Destructingprops/Parent';
import ParentCountry from './components/props/classTask/ParentCountry';

function App() {
  return (
    <div className="App">
   <Greetings name="John" age={20}  course="FSD" />
   <UserStatus isLoggedIn={false} />

   <ParentComponent />
   <ArrayParent />
   <ObjectParent />
    <ParentCountry />
{/*    
   Destructing */}

    <Parent />
    </div>
  );
}

export default App;
