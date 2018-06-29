import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import Search from '../Search/Search';
import ComparedDistricts from '../ComparedDistricts/ComparedDistricts';

import DistrictRepository from '../../helper';
import kinderGardenerData from '../../data/kindergartners_in_full_day_program';

import './App.css';

const schoolDistricts = new DistrictRepository(kinderGardenerData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      comparedDistricts: [
        {
          location: 'hellow',
          stats: {2000: 0.29293}
        }
      ]
    };
  }

  componentDidMount = () => {
    this.getSchoolDistrictData();
  }

  getSchoolDistrictData = () => {
    const districts = Object.values(schoolDistricts.stats);
    this.setState({ districts });
    return districts;
  }

  filterDistricts = (query) => {
    const queriedDistrict = schoolDistricts.findAllMatches(query);

    if (query === '') {
      this.setState({districts: this.getSchoolDistrictData() });
    } else {
      this.setState({districts: queriedDistrict});
    }
  }

  render() {
    const { districts, comparedDistricts } = this.state;

    return (
      <main>
        <ComparedDistricts 
          comparedDistricts={comparedDistricts} 
        />
        <Search
          filterDistricts={this.filterDistricts}
        />
        <CardContainer
          districts={districts}
        />
      </main>
    );
  }
}

export default App;