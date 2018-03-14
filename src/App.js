import React, { Component } from 'react';
import './App.css';
import KinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtObj: null,
      districtArray: null
    }
  }
  retrieveData() {
    const district = new DistrictRepository(KinderData);

    const schools = district.findAllMatches();

    this.setState({ districtArray: schools,
                    districtObj: schools
     })
  }
  componentDidMount() {
    this.retrieveData()
  }
  render() {
    return (
      <div>
        <CardContainer schools={this.state.districtArray}/>
      </div>
    );
  }
}

export default App;
