import React, { Component } from 'react'

 class ClassBasedRefwithMethod extends Component {
    constructor(props) {
      super(props)
     this.inputRef = React.createRef()
    }
    focusInput = () => {
        this.inputRef.current.focus()
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    
  render() {
    return (
      <div>
        <input type='text' ref = {this.inputRef} />
        <button onClick={this.focusInput}>focus input</button>
        <button onClick={this.clickHandler}>see current input text in alert</button>
      </div>
    )
  }
}

export default ClassBasedRefwithMethod
