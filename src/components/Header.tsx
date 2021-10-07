import React from 'react';
import '../css/Header.css';
import Dropdown from './Dropdown';

function Header() {
  return (
      <header className="App-header">
        <Dropdown />
        {/* <img
            id="header-image"
            // src="/images/cover.png"
            alt="image"
        /> */}
        <h1>F1 in Schools</h1>
      </header>
  );
}

export default Header;