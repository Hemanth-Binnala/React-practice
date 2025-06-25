import React,{useEffect,useMemo} from 'react'

const throttle = (func,delay) => {
    let lastcall = 0
    return(...args) =>{
        const now = Date.now()
        if(now - lastcall >= delay ){
            lastcall = now
            func(...args)
        }
    } 
}
function ScrollEventLogger() {
    const scroll = () => {
        console.log("The scrolled position is Y : ", window.scrollY, "X :", window.scrollX )
    }
    const throttleScroll = useMemo(() => throttle(scroll,500),[])
    useEffect(() => {
        window.addEventListener('scroll',throttleScroll)
        return() => {
         window.removeEventListener('scroll',throttleScroll)
        }
    },[throttleScroll])
  return (
    <div style = {{height:'2000px',padding:'20px'}}>
      scroll down and check the log every 500ms
    </div>
  )
}

export default ScrollEventLogger
