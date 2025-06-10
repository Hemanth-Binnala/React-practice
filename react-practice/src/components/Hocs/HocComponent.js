import React from 'react'

const HocComponent = (OriginalComponent,incrementBy) => {
    class NewComponent extends React.Component{
        constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment = () => {
        this.setState(previousState => {
           return { count: previousState.count + incrementBy } 
        }) 
    }
        render(){
            return <OriginalComponent count = {this.state.count} increment = {this.increment} {...this.props} />
        }
    }
    return NewComponent
}

export default HocComponent;
