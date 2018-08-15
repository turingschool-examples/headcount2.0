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
      displayedLocations: {},
      cards: []
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(kinderData);
    this.setState({ locations: district.stats, displayedLocations: district.stats })
  }

  selectLocation = (location) => {
    const locationData = this.state.locations[location]

    if (this.state.cards.includes(locationData)) {
      const selectedCards = this.state.cards.filter(card => card.location !== locationData.location)
      this.setState({ cards: selectedCards })
    }

    if (!this.state.cards.includes(locationData) && this.state.cards.length === 2) {
      this.setState({ cards: this.state.cards.shift() })
    }

    if (!this.state.cards.includes(locationData) && this.state.cards.length < 2) {
      this.setState({ cards: [...this.state.cards, locationData] })
    }

  }

  searchLocations = (e) => {
    const district = new DistrictRepository(kinderData);
    const matchingDistricts = district.findAllMatches(e.target.value)
    let matchingDistrictData = {};

    matchingDistricts.forEach(district => {
      matchingDistrictData[district] = this.state.locations[district]
    })

    this.setState({ displayedLocations: matchingDistrictData })
  }

  render() {
    return (
      <div className='App'>
        <LocationList displayedLocations={Object.keys(this.state.displayedLocations)}
          selectLocation={this.selectLocation}
          searchLocations={this.searchLocations} />
        <CardContainer cards={this.state.cards} />
      </div>
    );
  }
}

export default App;