import React, {Component} from 'react';
import './Menu.css';
import { regularFood, breakfast } from './food.json';
import CreateOrder from './Order';


console.log(regularFood, breakfast);


class Menu extends Component {
	constructor(){
		super();
		this.state = {
			regularFood: regularFood,
			order: []
		}
	};

	selectItems(event){
		if(event.target){
			const newItem = {
				'name': event.target.innerHTML,
				'type': event.target.type,
				'price': event.target.dataset.price
			}

			this.setState({
				order: [...this.state.order, newItem],
			}, () => {
			console.log(this.state.order);
			});
		};
	}

	render (){
		const RegularFood = this.state.regularFood.map((regularFood, i) =>{
			return(
					<div className="card" key={regularFood.id} onClick={(event) => this.selectItems(event)} >
						<p>{regularFood.name} ${regularFood.price} {regularFood.type}
						</p>
					</div>
				)
		})

		return(
			<div className="menu">
				{RegularFood}
				<CreateOrder/>
			</div>
			);
	};
};

export default Menu;
