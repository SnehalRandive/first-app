///Destructing//
import React from 'react';

function greet(props) {
  const {name,coursename} =props;
  return (
    <div>
    <h1>All great changes {name} are preceded by coursename {coursename}</h1>
    {/* {props.children} */}
    
    {/* <h1>Everything You need is already inside you, Get Started.</h1> */}
    </div>
  );
}

export default greet;
