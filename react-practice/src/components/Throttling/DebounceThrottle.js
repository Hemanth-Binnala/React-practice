import React, { useEffect, useMemo, useState } from 'react'

const debounce = (func,delay) => {
    let timer
    return(...args)=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{func(...args)},delay)
    }
}
const throttle = (func,delay) =>{
    let lastcall = 0
    return(...args) => {
        const now = Date.now()
        if(now - lastcall >= delay){
            lastcall = now
            func(...args)
        }
    }
}

const NAMES = ['sai','saaaaaai','saaar','sawe','kohli','joshi','hero','zero']

function DebounceThrottle() {
    const[input,setInput] = useState('')
    const[suggested,setSuggested] = useState([])
    const logname = (text) => {
        if(!text){
            setSuggested([])
            return;
        }
        const filtered = NAMES.filter((name)=>name.toLowerCase().startsWith(text.toLowerCase()));
        setSuggested(filtered)
    }
    const handleInputChange=(e) => {
        const value = e.target.value
        setInput(value)
    }
    const fakeApicall = () => {
        console.log(`The Api is called ${input}`)
    }
    const throttled = useMemo(() => throttle(fakeApicall,2000),[input])
    const debounced = useMemo(() => debounce(logname,400),[])
    useEffect(()=>{
        debounced(input)
    },[input,debounced])
  return (
    <div style={{padding:'40px'}}>
      <input type = 'text' onChange={handleInputChange}/>
      {
        suggested.length > 0 && (
            <ul>
               {suggested.map((name,index) => <li key={index}>
                {name}
               </li> )} 
            </ul>
        )
      }
      <br />
      <button style={{marginTop:'20px',marginLeft:'50px'}} onClick={throttled}>Submit</button>
    </div>
  )
}

export default DebounceThrottle
