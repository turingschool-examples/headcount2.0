import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import LocationList from './LocationList';

class App extends Component {
  constructor() {
    super()
    this.district = new DistrictRepository(kinderData);
    this.state = {
      locations: this.district.stats,
      cards: []
    }
  }

  handleClick = (e) => {
    const locationData = this.state.locations[e.target.name]
    if (!this.state.cards.includes(locationData) && this.state.cards.length < 2) {
      this.setState({ cards: [...this.state.cards, locationData] })
    }
    console.log(this.state.cards)
  }

  render() {
    return (
      <div>
        <h1>KINDERGARTNERS IN FULL DAY PROGRAM</h1>
        <LocationList locations={Object.keys(this.state.locations)} handleClick={this.handleClick} />
        <CardContainer cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
