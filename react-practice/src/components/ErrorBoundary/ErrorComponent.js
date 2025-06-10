import React, { useState } from 'react'

const ErrorComponent = () => {
    const [error,setError] =useState(false);
    if(error){
        throw new Error("I crahsed")
    }
  return (
    <button onClick = { () => setError(true)}>click me</button>
  )
}

export default ErrorComponent
