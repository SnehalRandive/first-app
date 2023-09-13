import React from 'react';

function Child(props) {
  return (
    <>
    <div>
      Child
    </div>
    <button onClick={props.Parenthandler('Child')}>Click ME</button>
    </>
  );
}

export default Child;

