import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import KinderData from './data/kindergartners_in_full_day_program.js';
import DistrictSearch from './DistrictSearch.js'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : {}
    }

  }

  componentDidMount = () => {
    const district = new DistrictRepository(KinderData);
    const districtData = district.stats
    this.setState((state) => {
      return {data: districtData};
    });
  }

  handleSearch = (searchString) => {
    const district = new DistrictRepository(KinderData);
    const districtSearch = district.findAllMatches(searchString);
    console.log('yo')
    this.setState((state) => {
      return {data: districtSearch}
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="app">
        <DistrictSearch handleSubmit={this.handleSearch} />
        <CardContainer data={ data } />
      </div>
    );
  }
}

export default App;
