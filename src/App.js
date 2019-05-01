import React, { Component } from 'react';
import './App.css';
import CardsContainer from './CardsContainer';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';



class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: new DistrictRepository(kinderData)
    };

  }

  render() {
    return (
      <div>
        <CardsContainer districts={ this.state.districts }/>
      </div>
    );
  }
}

export default App;
