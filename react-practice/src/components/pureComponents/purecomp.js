import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
  render() {
    console.log('pureeeeeeeeeeeeeee')
    return (
      <div>
        Pure class Component {this.props.name}
      </div>
    )
  }
}

export default Purecomp

// implements shouldcomponentupdate with shallowProps and state comparison
