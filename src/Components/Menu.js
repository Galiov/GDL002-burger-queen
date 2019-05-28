import React from 'react';
import Items from './Items';

//import HamburgerType from './SubMenu';

const hamburgers = () => {
  window.location.href = "https://www.google.com/search?tbm=isch&sa=1&ei=MXfaXKyTCIT-sAWMwJRY&q=hamburger&oq=hamburger&gs";
	/*return(
		<div className="hamburgers">
			<HamburgerType/>
		</div>	
		);
	*/
};


const PrincipalItems = () => {

	return (
	    <div className="menu">
          <Items name="Hamburguesas" action={hamburgers}/>
          <Items name="Acompañamientos"/>
          <Items name="Bebidas"/>
        </div>
        );
};

export default PrincipalItems;