import React, { Component } from 'react'
import Regcomp from './Regcomp'
import Purecomp from './purecomp'
import FunctionalPureComponents from './functionalPureComponents'


class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state = {name: 'Hemanth'}
    }
    componentDidMount(){
        setInterval( () => {
            this.setState({name:  'Hemanth'})
        },2000)
    }
  render() {
    console.log('parentttttttttt')
    return (
      <div>
        parent compopnent
        <FunctionalPureComponents name={this.state.name} />
        {/* <Regcomp name = {this.state.name}  />
        <Purecomp name = {this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
