import React from 'react';
import './Header.css';

function Header() {

  const headerStyle = {
    textAlign: 'center',
    fontFamily: 'Righteous',
    fontSize: '50px',
  }


  return (
    <div style={headerStyle}>
    <a href='/'><button className='button' type='submit'>New</button></a>
    <h1>Tactic Bros Tic Tac Toes</h1>
    </div>
  );
}

export default Header;
