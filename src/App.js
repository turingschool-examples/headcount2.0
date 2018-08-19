import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import Search from './Search';

let district = new DistrictRepository(kinderData);

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
    this.loadData();
  }

  loadData() {
    Object.keys(district.stats).forEach( location => (
      district.stats[location] = {
        ...district.stats[location],
        average: district.findAverage(location)
      }
    ));

    this.setState({ 
      locations: district.stats, 
      displayedLocations: district.findAllMatches(),
      cards: [],
      averages: {}
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

  toggleHelperInfo = () => {
    document.querySelector('.CardContainer__btn').classList.toggle('CardContainer__btn--unfocus');
    document.querySelector('.CardContainer__info').classList.toggle('CardContainer__info--show');
  }

  toggleDropDown = () => {
    const selected = 'CardContainer__header--selected';
    document.querySelector('.dropdown-content').classList.toggle('dropdown-content--show');
    document.querySelector('.CardContainer__header').classList.toggle(selected);
  }

  changeDistrictData = (data) => {
    district  = new DistrictRepository(data);
    this.loadData();
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
          toggleDropDown={this.toggleDropDown}
          toggleHelperInfo={this.toggleHelperInfo}
          cards={this.state.cards}
          averages={this.state.averages}
          selectLocation={this.selectLocation} 
          changeDistrictData={this.changeDistrictData} />
      </div>
    );
  }
}

export default App;