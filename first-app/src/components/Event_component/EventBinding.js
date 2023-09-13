import React, { Component } from 'react';

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg : "Hello"
      }
    //   console.log(this)
    //   this.clickhandler = this.clickhandler.bind(this)
    
    }
    // clickhandler(){
    //     this.setState({
    //         msg :"This is 2nd way"
    //     })
    // }
    
  render() {
    return (
        <>
      <div>
        {this.state.msg}
      </div>
      {/* <button onClick={this.clickhandler.bind(this)}>Click Me</button> */}
      {/* <button onClick={ ()=> this.clickhandler()}>Click Me</button> */}
      <button onClick={this.clickhandler}>Click Me</button>
      </>
    );
  }
}

export default EventBinding;
