import React, { Component } from 'react'
import HocComponent from './HocComponent'

 class ClickCounterHoc extends Component {

    
  render() {
    const {count,increment} = this.props
    return  <button onClick={increment}> {this.props.name} Hoc clicked {count} times</button>
  }
}

export default HocComponent(ClickCounterHoc,5)
