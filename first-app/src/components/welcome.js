import React, { Component } from 'react';

 class welcome extends Component {
  render() {
    const {name,coursename} = this.props
    return (
        
        <div>This is welcome.js class Component
        
        <h1>Hello,my name is {name} and coursename {coursename}</h1>
        </div>
    );
  }
}

export default welcome;

