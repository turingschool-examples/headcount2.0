import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import Search from './Search';

//file structure App/ index.js styles.css test/ index.test.js mockdata.js (automatically looks for index when calling folder)

class App extends Component {
  constructor() {
    super();
    this.state = {
      district: new DistrictRepository(kinderData),
      locations: {},
      displayedLocations: [],
      cards: [],
      averages: {},
      displayHelperInfo: true
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const districtStats = this.state.district.stats;
    
    Object.keys(districtStats).forEach( location => (
      districtStats[location] = {
        ...districtStats[location],
        average: this.state.district.findAverage(location)
      }
    ));

    this.setState({ 
      locations: districtStats, 
      displayedLocations: this.state.district.findAllMatches(),
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
    this.setState({ displayedLocations: this.state.district.findAllMatches() }); 
  }

  searchLocations = (value) => {
    const matchingDistricts = this.state.district.findAllMatches(value);

    this.setState({ displayedLocations: matchingDistricts });
  }

  compareAverages = () => {
    if (this.state.cards.length === 2) {
      const locationA = this.state.cards[0].location;
      const locationB = this.state.cards[1].location;
      const averages = this.state.district.compareDistrictAverages(locationA, locationB);
      this.setState({ averages });
    } else {
      this.setState({ averages: {} });
    }
  }

  toggleHelperInfo = () => {
    this.setState({ displayHelperInfo: !this.state.displayHelperInfo })
  }

  changeDistrictData = (data) => {
    this.setState({ district: new DistrictRepository(data) });
    this.loadData();
  }

  render() {
    const { 
      cards,  
      displayedLocations, 
      averages,
      displayHelperInfo } = this.state;

    return (
      <div className='App'>
        <Search 
          cards={cards}
          searchLocations={this.searchLocations} 
          displayedLocations={displayedLocations}
          selectLocation={this.selectLocation}/>
        <CardContainer 
          displayHelperInfo={displayHelperInfo}
          toggleHelperInfo={this.toggleHelperInfo}
          cards={cards}
          averages={averages}
          selectLocation={this.selectLocation} 
          changeDistrictData={this.changeDistrictData} />
      </div>
    );
  }
}

export default App;