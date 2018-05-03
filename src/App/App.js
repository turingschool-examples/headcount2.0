import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js';
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js'
import Compare from '../Compare/Compare.js';
import Search from '../Search/Search.js';

const data = new DistrictRepository(kinderData);

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        districtsData: []
  }
  }

  searchFilter = ( userInput ) => {
    const sanitizedUserInput = userInput.toUpperCase();
  
    const filteredDistricts = Object.keys(data.stats)
      .map( districtKey => data.stats[districtKey])
      .filter( district => district.location.includes( sanitizedUserInput ))

      if(filteredDistricts.length >= 1) {
        this.setState({ districtsData: filteredDistricts})
      }
  }
  
  componentDidMount() {
    this.setState({
      districtsData: data.stats
    })
  }

  render() {
    if(this.state.districtsData.length === 0) {
      return(
        <p>Please Wait</p>
      )
    }
    return (
      <div className="app"> 
        <Compare />
        <Search
          searchFilter={ this.searchFilter } />
        <CardContainer 
          districtsData={ this.state.districtsData }
        />
      </div>
    );
  }
}


export default App;
