import React,{Component} from "react";
import './Order.css';


class CreateOrder extends Component {
	/*constructor(props){
		super(props);
		this.state = {
			order: []
		}
	}

	selectItems(event){
		if(event.target.onClick){
			const newItem = {
				'name': event.target.name,
				'type': event.target.type,
				'price': event.target.price
			}

			this.setState({
				order: [...this.state.order, newItem],
			}, () => {
			console.log(this.state.order);
			});
		};
	}*/

	render(){
		return(
				<div className="order">
				 <h1>Aquí va la orden</h1>
				</div>
			);
	}

};

export default CreateOrder;