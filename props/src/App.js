
import './App.css';
import Greetings from './components/props/Greetings';
import UserStatus from './components/props/UserStatus';
import ParentComponent from './components/props/ParentComponent';
import ArrayParent from './components/props/ArrayParent';
import ObjectParent from './components/props/ObjectParent';
import Parent from './components/Destructingprops/Parent';
import ParentCountry from './components/props/classTask/ParentCountry';
import ParentObject from './components/Destructingprops/ParentObject';
import ParentArray from './components/Destructingprops/ParentArray';
import Library from './components/Destructingprops/Library';
import DefaultParent from './components/Defaultprops/DefaultParent';
import ConditionParent from './components/ConditionRenderingprops/ConditionParent';
import ImageGallery from './components/project/ImageGallery';
import ImageData from './components/project/ImageData.json';


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
   <ParentObject />
   <ParentArray />
   <Library />

   <DefaultParent />
   <ConditionParent />
   <ImageGallery images={ImageData} />
    </div>
  );
}

export default App;
