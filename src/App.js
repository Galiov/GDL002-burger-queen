import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Receiver from './Components1.0/Receiver';
import Menu from './Components1.0/Menu';

class App extends Component {
  render() {
  
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Receiver}/>
          <Route path="/menu" component={Menu}/>
        </Switch>
      </BrowserRouter>
    );
  };
};

export default App;
