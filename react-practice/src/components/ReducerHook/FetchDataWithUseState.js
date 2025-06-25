import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchDataWithUseState() {
    const[loading,setLoading] = useState(true);
    const[data,setData]=useState({})
    const[error,setError]=useState('')
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>{
                setLoading(false);
                setError('');
                setData(response.data)
                console.log(response)
            })
            .catch(error =>{
                setLoading(false);
                setData({})
                setError("something went wrong")
            })
    },[]) 
  return (
    <div>
      {loading ? 'loading' : data.title}
      {error ? error: null}
    </div>
  )
}

export default FetchDataWithUseState
