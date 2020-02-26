import React from 'react';

function Markings(props) {

  const markingsStyle = {
    textAlign: 'center',
    fontSize: '400px',
    marginTop: '-13%',
  }
  return (
    <div>
    <h1 style={markingsStyle}> {props.square.marking} </h1>
    </div>
  );
}

export default Markings;
