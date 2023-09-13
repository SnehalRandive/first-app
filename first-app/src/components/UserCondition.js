import React, { Component } from 'react';

class UserCondition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn : true
      }
    }
    
  render() {

    return this.state.logInn && <h2>Login Successfull..!</h2>

    // return (this.state.logInn) ? <h2>User conditional statement</h2> :  <h2>Hello world..!</h2>


    // let text;
    // if(this.state.logInn){
    //     text = <h2>User conditional statement</h2>
    // }
    // else{
    //     text = <h2>Hello world..!</h2>
    // }
    // return(<h1>{text}</h1>)



    
        // if (this.state.logInn){
        //  return<div>
        // UserCondition statement</div>
      
        // }
        // else{
        //     <div>Hello world...!</div>
        // }
       
     

    
   }
}

export default UserCondition;
