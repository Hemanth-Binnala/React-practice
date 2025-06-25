import React, {useEffect} from 'react'

const debounce = (func,delay) => {
    let timer
    return(...args) => {
        clearTimeout(timer)
        timer = setTimeout(()=>{func(...args)},delay)
    }
}
function ResizeEventOptimization() {
    useEffect(() => {
    const logSizes = () => {
        console.log("the Size of the screen",window.innerHeight,window.innerWidth)
    }
    const debouncedResize = debounce(logSizes,500)
    window.addEventListener('resize',debouncedResize)
    return() =>{
        window.removeEventListener('resize',debouncedResize) 
    }
   
    },[])

  return (
    
    <div>
      Resize the window and watch the console log after 500ms of inactivity.
    </div>
  )
}

export default ResizeEventOptimization
