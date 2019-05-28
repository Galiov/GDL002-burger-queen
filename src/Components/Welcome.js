import React, {Component} from 'react';
import './Welcome.css';


class GetName extends Component {
	constructor(props){
		super (props);
		this.state = {
			value:''
		};
	}

	printName(event) {
		alert('¡Hola ' + this.state.value + '! ¿Qué vas a ordenar?');
		console.log('¡Hola ' + this.state.value + '! ¿Qué vas a ordenar?');
	}

	render(){
		return(
			<div className="input-div">
			<input type="text" value={this.state.value} className="name" placeholder={'Escribe tu nombre'} 
			onChange={(event) => this.updateInputValue(event)}/>
			<button className="send" onClick={(event) => this.printName(event)}>Enviar</button>
			</div>
			);
	}


	updateInputValue(event) {
		this.setState({
			value: event.target.value
		});
	};

};

export default GetName;
