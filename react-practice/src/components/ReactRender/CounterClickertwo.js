import React, { Component } from 'react'

export class CounterClickertwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    clicked = () => {
        this.setState((prevState) => {
            return {count : prevState.count + 1}
        })
    } 
    
  render() {
    const {count} = this.state
    return <button onClick = {this.clicked}>Click React render Button {count} times </button>
  }
}

export default CounterClickertwo
