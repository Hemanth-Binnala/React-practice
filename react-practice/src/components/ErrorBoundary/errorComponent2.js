import React, { useState } from 'react'

const ErrorComponent2 = () => {
    const [error,setError] =useState(false);
    if(error){
        throw new Error("I crahsed")
    }
  return (
    <button onClick = { () => setError(true)}>click me 1</button>
  )
}

export default ErrorComponent2