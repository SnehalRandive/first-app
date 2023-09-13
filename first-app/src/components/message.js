import React, { Component } from 'react';

 class message extends Component {
    constructor(){
        super()
        this.state ={
            msg : 'welcome to reactJs'
        }
    }
    click(){
        this.setState({
            msg:"This is state change"
        })
    }
  render() {
    return (
      <>
        <h1>{this.state.msg}</h1>
        <button onClick={()=>this.click()}>Change</button>
      </>
    );
  }
}

export default message;


