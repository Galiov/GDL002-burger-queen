import React from 'react';
import './Items.css';

const Item = props => {
		return (
			<div className="Item Items-aling" onClick={props.action}>
			<p>{props.name}</p>
			</div>
			);
};

export default Item;