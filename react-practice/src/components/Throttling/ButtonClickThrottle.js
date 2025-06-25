import React,{useMemo} from 'react'

const throttle = (func,delay) => {
    let lastcall = 0
    return(...args) => {
        const now = Date.now()
        if(now - lastcall >= delay){
            lastcall = now ;
            func(...args)
        }
    }
}

function ButtonClickThrottle() {
    const handleClick = () => {
        console.log("Button Clicked at ", new Date().toLocaleTimeString())
    }
    const throttledButton = useMemo(() => throttle(handleClick,2000),[])
  return (
    <div style={{padding:'40px'}}>
      <button onClick={throttledButton}>click me jack</button>
    </div>
  )
}

export default ButtonClickThrottle
