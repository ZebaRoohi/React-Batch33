import React, { useReducer } from 'react'

function Counter(state,action){  //reducer
    switch(action.type){
        case 'INC':
            return {count:state.count+1}
        case 'DEC':
            return{count:state.count-1}
        default:
            return state

   }

}

const CounterReducer = () => {
    const[state,dispatch]=useReducer(Counter,{count:0})
  return (
    <div>
      <p>Counter:{state.count}</p>
      <button onClick={()=>dispatch({type:'INC'})}>Increment</button>
      <button onClick={()=>dispatch({type:'DEC'})}>Decrement</button>

    </div>
  )
}

export default CounterReducer

