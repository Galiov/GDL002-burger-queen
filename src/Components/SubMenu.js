import React from 'react';
import Items from './Items';
import './Menu.css';

const HamburgerType = () => {
	return(
		<div className="hamburgers">
			<Items name="Hamburguesa sencilla"/>
			<Items name="Hamburguesa doble"/>
		</div>	
		);
}


export default HamburgerType;