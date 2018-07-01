import React, { Component } from 'react';
import './App.css';
import ControlledForm from '../ControlledForm/ControlledForm';
import DistrictRepository from './helper';
import CardContainer from '../CardContainer/CardContainer';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      matchingDistricts: {},
      comparedDistricts: []
    }
  }

  componentDidMount() {
    const districtRepository = new DistrictRepository()
    this.setState({ matchingDistricts: districtRepository.stats })
  
  }

  findDistrict = (input) => {
    const districtRepository = new DistrictRepository();
    const filteredDistricts = districtRepository.findAllMatches(input);
    this.setState({ matchingDistricts: filteredDistricts });
  }
 
  selectDistrict = (districtName) => {
    const districtRepository = new DistrictRepository();
    const clickedDistrict = districtRepository.findByName(districtName);
    
  } 

  runComparison = () => {
    const districtRepository = new  DistrictRepository()
    const districtToCompare = Object.keys(this.state.comparedDistricts);
    if (districtToCompare.length > 1) {
      return districtRepository.compareDistrictAverages(districtToCompare[0], districtToCompare[1])
    }
  }

  compareCard = (id) => {

  }

  render() {
    return (
      <div>
        <h1>Count dem Heads</h1>
        <ControlledForm 
          findDistrict={this.findDistrict}/>
        <ComparisonContainer
          comparedDistricts={this.state.comparedDistricts}
          runComparison={this.runComparison}
        />
        <CardContainer 
          matchingDistricts={this.state.matchingDistricts}
        />
      </div>
    );
  }
}


export default App;
