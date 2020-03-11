import React from 'react';
import pizza from '../../assets/images/pizza3.png';

const Header = () => {
  return (
    <>
      <header className='App-header'>
        <img src={pizza} className='App-logo' alt='logo' />
        <h1 className='app-name'>Pizza Pals</h1>
      </header>
    </>
  );
};

export default Header;
