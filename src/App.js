import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import Search from './Search';

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
    this.setState({ displayedLocations: district.findAllMatches() }); 
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

  revealHelperInfo = () => {
    const info = document.querySelector('.CardContainer__info');
    const button = document.querySelector('.CardContainer__btn');

    if (info.style.visibility === 'hidden') {
      info.style.visibility = 'visible';
      button.className = 'CardContainer__btn CardContainer__btn--Focus';
    } else {
      info.style.visibility = 'hidden';
      button.className = 'CardContainer__btn';
    }
  }

  render() {
    return (
      <div className='App'>
        <Search 
          cards={this.state.cards}
          searchLocations={this.searchLocations} 
          displayedLocations={this.state.displayedLocations}
          selectLocation={this.selectLocation}/>
        <CardContainer 
          revealHelperInfo={this.revealHelperInfo}
          cards={this.state.cards}
          averages={this.state.averages}
          selectLocation={this.selectLocation} />
      </div>
    );
  }
}

export default App;