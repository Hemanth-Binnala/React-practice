import React, { useState,useMemo } from 'react'

const debounce = (func,delay) => {
    let timer
    return(...args) =>{
        clearTimeout(timer);
        timer = setTimeout(()=>{func(...args)},delay)
    }
}

function SimpleInputBox() {
    

    const[updated,setUpdated] = useState('');
    const debouncedCall = useMemo(()=>debounce((val)=>setUpdated(val),500),[])
    const handleChange = (e) =>{
        const value = e.target.value;
        debouncedCall(value)

    }
    
  return (
    <div>
      <input type='text' onChange = {handleChange} />
        <span>Typed name : {updated}</span> 
    </div>
  )
}

export default SimpleInputBox
