import React, { Component } from 'react';
import Child from './Child';
// import Childcomponent from './Childcomponent';
//import Childcomponent from './Childcomponent';

class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        ParentName: "Snehu" 
      }
    this.parentOne = this.parentOne.bind(this)

    }
    parentOne(childdata){
        alert(`Hello ${this.state.ParentName} from ${childdata}`)
        // alert("Hello"+this.state.ParentName)
    }
    render() {
    return (
        <>
      <div>
      <Child Parenthandler ={this.parentOne}/>
      {/* <Childcomponent/> */}
         {/* < Parenthandler = {this.parentOne}/> */}
      </div>
      </>
    );
  }
}

export default Parentcomponent;
