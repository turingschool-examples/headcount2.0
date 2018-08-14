import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import LocationList from './LocationList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      locations: {},
      cards: []
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData);
    this.setState({ locations: district.stats })
  }

  selectLocation = (location) => {
    const locationData = this.state.locations[location]

    if (this.state.cards.includes(locationData)) {
      const selectedCards = this.state.cards.filter(card => card.location !== locationData.location)
      this.setState({ cards: selectedCards })
    } else if (this.state.cards.length < 2) {
      this.setState({ cards: [...this.state.cards, locationData] })
    }
  }

  render() {
    return (
      <div>
        <h1>KINDERGARTNERS IN FULL DAY PROGRAM</h1>
        <LocationList locations={Object.keys(this.state.locations)} selectLocation={this.selectLocation} />
        <CardContainer cards={this.state.cards} />
      </div>
    );
  }
}

export default App;