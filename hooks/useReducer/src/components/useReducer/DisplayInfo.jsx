import React, { useReducer } from 'react'

function Reducer(state,action){
    switch(action.type){
        case 'SETNAME':
            return{...state,name:action.payload}
        case 'SETAGE':
            return{...state,age:action.payload}
        default:
            return state
    }
}

const DisplayInfo = () => {
    const[state,dispatch]=useReducer(Reducer,{name:'Sam',age:0})
  return (
    <div>
      <p>Name:{state.name}</p>
      <p>Age:{state.age}</p>
      <button onClick={()=>dispatch({type:'SETNAME',payload:'John'})}>SetName</button>
      <button onClick={()=>dispatch({type:'SETAGE',payload:23})}>SetAge</button>
    </div>
  )
}

export default DisplayInfo
