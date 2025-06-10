import React, { Component } from 'react'

export class HoverMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hovered : 0
      }
    }
    hoveredOn = () => {
        this.setState(prevState => {
            return {hovered : prevState.hovered +1}
        })
    }
    
  render() {
    const {hovered} = this.state
    return (
      <h2 onMouseOver={this.hoveredOn}>Hovered {hovered} times</h2>
    )
  }
}

export default HoverMouse
