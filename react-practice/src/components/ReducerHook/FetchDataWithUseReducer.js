import React, { useReducer,useEffect } from 'react'
import axios from 'axios'

function FetchDataWithUseReducer() {
    const initialState = {
        data: {},
        error: '',
        loading:true

    }
    const reducer = (state,action) => {
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                loading: false,
                error: '',
                data:action.payload
                }
                
            case 'FAILED':
                return {
                loading: false,
                error: 'something went wrong',
                data:{}
                }
               
            default:
                return state
        }
    }
    const[state,dispatch]=useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                dispatch({type: 'FETCH_SUCCESS', payload: response.data})
            })
            .catch(error =>{
                dispatch({type: 'FAILED'})
            })

    },[])
  return (
    
    <div>
      {state.loading ? 'loading' : state.data.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default FetchDataWithUseReducer
