import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Receiver.css';
import logo from './burger.png';

const Receiver = () => {

	class GetName extends Component {
		constructor(props){
			super (props);
			this.state = {
				value:''
			};
		};

		printName(event) {
			const name = this.state.value;
			console.log('¡Hola ' + name + '! ¿Qué vas a ordenar?');
		};

		render(){
			return(
				<div className="input-div">
				<input type="text" value={this.state.value} className="name" placeholder={'Escribe tu nombre'} 
				onChange={(event) => this.updateInputValue(event)}/>
				<NavLink to="/menu">
				<button className="send" onClick={(event) => this.printName(event)}>Enviar</button>
				</NavLink>
				</div>
				);
		};


		updateInputValue(event) {
			this.setState({
				value: event.target.value
			});
		};

	};

	return (
      	<div className="App-receiver">
         <h2>Bienvenidx a </h2>
         <h1 className="burger-text">Burger Queen</h1>
         <img src={logo} className="App-logo" alt="logo" />
         <p>¿Quién será el representante de esta mesa?</p>
         <GetName/>
       </div>
	);
};

export default Receiver;