import React, { Component } from 'react';

import './App.css';
import DataHeader from './data-header';
import CardsContainer from './cards-container';


class App extends Component {
  render() {
    return (
      <div>
        Welcome To Headcount 2.0


        <DataHeader />
        <CardsContainer />


      </div>

    );
  }
}

export default App;
