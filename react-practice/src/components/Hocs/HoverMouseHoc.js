import React, { Component } from 'react'
import HocComponent from './HocComponent'

export class HoverMouseHoc extends Component {

    
  render() {
    const {count,increment} = this.props
    return (
      <h2 onMouseOver={increment}>Hovered {count} times</h2>
    )
  }
}

export default HocComponent(HoverMouseHoc,2)
