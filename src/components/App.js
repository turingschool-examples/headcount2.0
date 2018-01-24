import React, { Component } from 'react';
import Controls from './Controls';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper.js';
import '../styles/App.css';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const DistrictData = new DistrictRepository(kinderData);

class App extends Component {

  constructor() {
    super()
    this.state = {
      districtCards: []
    }
  }

  handleSearch = (district) => {
    this.setState({
      districtCards: DistrictData.findByName(district)
    })
  }

  render() {
    return (
      <section>
        <Controls />
        <ComparisonContainer />
        <CardContainer />
      </section>
    );
  }
}

export default App;
