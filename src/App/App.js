import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js'
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js'
import Compare from '../Compare/Compare.js';
import Search from '../Search/Search.js';

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
        districtsData: null
  }
  }

  searchFilter = ( userInput ) => {
    // debugger;
 const sanitizedUserInput = userInput.toUpperCase();
  
    const filteredDistricts = Object.keys(this.state.districtsData).map( districtKey => this.state.districtsData[districtKey]).filter( district => {
      return district.location.includes( sanitizedUserInput );
    })

    this.setState({ districtsData: filteredDistricts})
  }
  
  componentDidMount() {
    let newData = new DistrictRepository(kinderData)
    this.setState({
      districtsData: newData.stats
    })
  // console.log(this.state.districtsData.COLORADO);
  
  }

  render() {
    if(this.state.districtsData === null) {
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
