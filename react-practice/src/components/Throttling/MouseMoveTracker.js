import React, { useMemo,useEffect } from 'react'

const throttle = (func,delay) => {
    let lastCall = 0
    return(...args) =>{
        const now = Date.now()
        if(now - lastCall >= delay){
            lastCall = now
            func(...args)
        }
    }
}

function MouseMoveTracker() {
    const mousePosition = (e) => {
        console.log("the position of mouse is x :", e.clientX, "Y :",e.clientY )
    }
    const throttledMouse = useMemo(() => throttle(mousePosition,2000),[])
    useEffect(() => {
        window.addEventListener("mousemove",throttledMouse)
        return() => {
            window.removeEventListener("mousemove",throttledMouse)
        }
    })
  return (
    <div>
      Move the mouse chekc the logs
    </div>
  )
}

export default MouseMoveTracker
