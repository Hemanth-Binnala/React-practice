import React, { Component } from 'react'
import FRinput from './FRinput'

 class FRParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRinput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default FRParent
