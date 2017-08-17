import React, { Component } from 'react';
import './App.css';
import 'normalize.css';
import DistrictRepository from './DistrictRepository';
import SchoolList from './SchoolList'
import Search from './Search'
import kinderData from '../data/kindergartners_in_full_day_program'

const districtInfo = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.setState({
      data: districtInfo.data
    })
  }

  updateData(location) {
    this.setState({
      data: districtInfo.findAllMatches(location)
    })
  }

  render() {
    const data = this.state.data;
    return (
      <div>
        <Search findSchool={this.updateData.bind(this)}/>
        <SchoolList data={data} findAverage={districtInfo.findAverage.bind(districtInfo)}/>
      </div>
    );
  }
}

export default App;
