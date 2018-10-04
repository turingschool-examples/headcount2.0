import React, { Component } from 'react';
import Header from './Header/Header'
import CardContainer from './CardContainer/CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
