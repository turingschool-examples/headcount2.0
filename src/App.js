import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import LocationList from './LocationList';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      locations: {},
      displayedLocations: [],
      cards: [],
      averages: {}
    }
  }

  componentDidMount() {
    Object.keys(district.stats).forEach(location => district.stats[location] = { ...district.stats[location], average: district.findAverage(location) })

    this.setState({ locations: district.stats, displayedLocations: district.findAllMatches() })
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
    this.compareAverages(location);
  }

  searchLocations = (e) => {
    const matchingDistricts = district.findAllMatches(e.target.value)

    this.setState({ displayedLocations: matchingDistricts })
  }

  compareAverages = (location) => {
    if (this.state.cards.length > 0) {
      const averages = district.compareDistrictAverages(this.state.cards[0].location, location)
      this.setState({ averages })
      console.log(averages)
    } else {
      this.setState({ averages: {} })
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