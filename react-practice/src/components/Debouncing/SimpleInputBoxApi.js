import React,{useEffect, useMemo,useState} from 'react'

const debounce = (func,delay) => {
    let timer
    return(...args) => {
        clearTimeout(timer)
        timer = setTimeout(()=>{func(...args)},delay)
    }
}

function SimpleInputBoxApi() {
    const [inputText,setInputText] = useState('')
    const fakeApiCall = (value) => {
        console.log('The Api call is for',value)
    }
    const debouncedApiCall = useMemo(() => debounce(fakeApiCall,500),[] )
    useEffect(()=>{
        if(inputText){
            debouncedApiCall(inputText)
        }
    },[inputText,debouncedApiCall])
  return (
    <div>
      I am captain Jack Sparrow
      <input type="text" onChange={(e)=>setInputText(e.target.value)} />
    </div>
  )
}

export default SimpleInputBoxApi
