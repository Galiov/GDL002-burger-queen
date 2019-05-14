import React from 'react';
import './Header.css';
import logo from './burger.png';

const Header = () => {
	return (
        <div className="App-header">
          <h2>Bienvenidx a Burger Queen</h2>
           <img src={logo} className="App-logo" alt="logo" />
        </div>
		);
};

export default Header;