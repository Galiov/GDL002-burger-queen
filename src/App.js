import React, { Component } from 'react';
import './App.css';
import InputName from './Components/Welcome';
import Items from './Components/Items';


const hamburguers = () => {
  window.location.href = "https://google.com";
};


class App extends Component {
  render() {
    
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Burguer Queen</h2>
        </div>
        <div className="input">
          <p>¿Quién será el representante de esta mesa?</p>
          <InputName/>
          <button>Enviar</button>
        </div>

        <div>
          <Items name="Hamburguesas" action={hamburguers}/>
          <Items name="Acompañamientos"/>
          <Items name="Bebidas"/>
        </div>
      </div>
    );
  }
}

export default App;
