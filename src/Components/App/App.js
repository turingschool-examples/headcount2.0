import React, { Component } from 'react';
import './App.css';
import ControlledForm from '../ControlledForm/ControlledForm';
import DistrictRepository from './helper';
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      matchingDistricts: [],
    }
  }

  findDistrict = (input) => {

  }

  


  render() {
    return (
      <div>
        <h1>Count dem Heads</h1>
        <ControlledForm />
        <CardContainer 
          matchingDistricts={this.state.matchingDistricts}
        />
      </div>
    );
  }
}

export default App;
