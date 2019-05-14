import React, { Component } from 'react';
import './App.css';
import PrincipalItems from './Components/Menu';
import Header from './Components/Header';
import GetName from './Components/Welcome';
//import HamburgerType from './Components/SubMenu';


class App extends Component {
  render() {
    
    return (
      <div className="App">
          <Header/>
          <GetName/>
          <PrincipalItems/>
      </div>
    );
  };
};

export default App;
