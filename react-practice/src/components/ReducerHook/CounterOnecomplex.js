import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'increment' :
            return {firstCounter : state.firstCounter + action.value}
        case 'decrement' :
            return {firstCounter : state.firstCounter - action.value}
        case 'reset' :
            return initialState
        default :
            return state
    }
}
 function CounterOnecomplex() {
    const[count,dispatch] = useReducer(reducer,initialState)
  return (
    
    <div>
     <div>
      count : {count.firstCounter}
      <button onClick={()=>dispatch({type: 'increment', value: 1})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
      <button onClick={()=>dispatch({type: 'increment', value: 5})}>increment by 5</button>
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>decrement by 5</button>
    </div>
    </div>
  )
}

export default CounterOnecomplex;
