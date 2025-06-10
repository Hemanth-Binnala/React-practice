import React, { Component } from 'react'

 class User extends Component {
  render() {
    return (
      <div>
        {/* {this.props.name} if in the app.js given the prop as name */}
         {this.props.render()} {/*if given the prop as Function  */}
      </div>
    )
  }
}

export default User
