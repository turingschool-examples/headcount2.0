import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import DistrictRepository from '../../helper';
import kinderGardenerData from '../../data/kindergartners_in_full_day_program';
import './App.css';

const schoolDistricts = new DistrictRepository(kinderGardenerData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: []
    };
  }

  componentDidMount = () => {
    this.getSchoolDistrictData();
  }

  getSchoolDistrictData = () => {
    const districts = Object.values(schoolDistricts.stats);
    this.setState({ districts });
  }

  render() {
    const { districts } = this.state;
    return (
      <CardContainer
        districts={districts}
      />
    );
  }
}

export default App;