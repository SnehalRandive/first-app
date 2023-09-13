import React, { Component } from 'react';

class EventClass extends Component {
    clickHandler(){
        console.log("This is class event");
    };
    render() {

    return (
     <>
      <div>
        Eventclass
      </div>
      <button onClick={this.clickHandler}>Click Me</button>
      </>
    );
  }
}

export default EventClass;

