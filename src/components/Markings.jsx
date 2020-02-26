import React from 'react';

function Markings(props) {
  return (
    <div className="">
<h1> {props.square.position} </h1>
<h1> {props.square.marking} </h1>
    </div>
  );
}

export default Markings;
