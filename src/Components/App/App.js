import React, { Component } from 'react';
import './App.css';
import ControlledForm from '../ControlledForm/ControlledForm';
import DistrictRepository from './helper';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      matchingDistricts: {},
    }
  }

  componentDidMount() {
    const districtRepository = new DistrictRepository()
    this.setState({ matchingDistricts: districtRepository.stats })
  
  }

  findDistrict = (input) => {
    console.log('hi')
    const districtRepository = new DistrictRepository()
    const filteredDistricts = districtRepository.findAllMatches(input)
    this.setState({ matchingDistricts: filteredDistricts })
  }

  render() {
    return (
      <div>
        <h1>Count dem Heads</h1>
        <ControlledForm 
          findDistrict={this.findDistrict}/>
        <CardContainer 
          matchingDistricts={this.state.matchingDistricts}
        />
      </div>
    );
  }
}


export default App;
