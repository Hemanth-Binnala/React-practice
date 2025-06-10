import React from 'react'
import ReactDOM from 'react-dom'

const PortalExample = () => {
    const alertMesaage = () =>{
        alert('sai')
    }
  return ReactDOM.createPortal((
    <button onClick={alertMesaage}>click</button>
  ),document.getElementById('alert-root')) 
}

export default PortalExample
