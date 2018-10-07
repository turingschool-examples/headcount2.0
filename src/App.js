import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import KinderData from './data/kindergartners_in_full_day_program.js';
import DistrictSearch from './DistrictSearch.js';
import CompareContainer from './CompareContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      display: [],
      avgCard: {},
    }

  }

  componentDidMount = () => {
    const district = new DistrictRepository(KinderData);
    const districtData = district.findAllMatches()
    this.setState((state) => {
      return {data: districtData};
    });
  }

  handleSearch = (searchString) => {
    const district = new DistrictRepository(KinderData);
    const districtSearch = district.findAllMatches(searchString);
    // let spread = {...districtSearch}

    this.setState((state) => {
      return {data: districtSearch}
    })
  }

  handleCompare = (card) => {
    const district = new DistrictRepository(KinderData);
    let avgData = {}
    let schoolToCompare = this.state.data.find(school => {
      return school.location === card
    })
    this.state.display.push(schoolToCompare);
    
    if(this.state.display.length > 2){
      this.state.display.shift()
    }
    if(this.state.display.length === 2) {
      avgData = district.compareDistrictAverages(this.state.display[0].location, this.state.display[1].location)
    }
    this.setState((state) => {
      return {
        display : this.state.display, 
        avgCard: avgData}
    })

  }

  render() {
    const { data, display, avgCard } = this.state
    return (
      <div className="app">
        <DistrictSearch handleSubmit={this.handleSearch} />
        <CompareContainer 
          data={ data } 
          display={ display } 
          handleCompare={this.handleCompare} 
          avgCard={ avgCard } />
        <CardContainer data={ data } handleCompare={this.handleCompare} />
      </div>
    );
  }
}

export default App;
