import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import SearchForm from '../SearchForm/SearchForm';
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

  filterSchools(district) {
    console.log(district);
  }

  render() {
    const { districts } = this.state;
    return (
      <main>
        <SearchForm
          filterSchools={this.filterSchools}
        />
        <CardContainer
          districts={districts}
        />
      </main>
    );
  }
}

export default App;