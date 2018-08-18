import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import LocationList from './LocationList';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: {},
      displayedLocations: [],
      cards: [],
      averages: {}
    };
  }

  componentDidMount() {
    Object.keys(district.stats).forEach( location => (
      district.stats[location] = {
        ...district.stats[location],
        average: district.findAverage(location)
      }
    ));

    this.setState({ 
      locations: district.stats, 
      displayedLocations: district.findAllMatches() 
    });
  }

  selectLocation = (location) => {
    const locationData = this.state.locations[location];

    if (this.state.cards.includes(locationData)) {
      const selectedCards = this.state.cards.filter( card => (
        card.location !== locationData.location
      ));
      this.setState({ cards: selectedCards }, () => this.compareAverages());
    } else if (this.state.cards.length === 2) {
      this.setState({ cards: [locationData] }, () => this.compareAverages());
    } else {
      this.setState(
        { cards: [...this.state.cards, locationData] }, 
        () => this.compareAverages()
      );
    }

  }

  searchLocations = (value) => {
    const matchingDistricts = district.findAllMatches(value);

    this.setState({ displayedLocations: matchingDistricts });
  }

  compareAverages = () => {
    if (this.state.cards.length === 2) {
      const locationA = this.state.cards[0].location;
      const locationB = this.state.cards[1].location;
      const averages = district.compareDistrictAverages(locationA, locationB);
      this.setState({ averages });
    } else {
      this.setState({ averages: {} });
    }
  }

  render() {
    return (
      <div className='App'>
        <LocationList displayedLocations={this.state.displayedLocations}
          selectLocation={this.selectLocation}
          searchLocations={this.searchLocations} />
        <CardContainer cards={this.state.cards}
          averages={this.state.averages} />
      </div>
    );
  }
}

export default App;