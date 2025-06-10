import React, { Component } from 'react'

export class CounterClickertwoRender extends Component {

    
  render() {
    const {count,clicked} = this.props
    return <button onClick = {clicked}>Click React render Button {count} times </button>
  }
}

export default CounterClickertwoRender 
