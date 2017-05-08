import React, { Component } from 'react';
import '../App.css';
import Controls from './Controls';
import CardContainer from './CardContainer';
import DistrictRepository from '../helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      district: {},
      compare: [],
      comparison: '',
    }
  }

  componentWillMount() {
    this.onLoad();
  }

  onLoad() {
    this.setState({
      district: district.data,
    })

  }

  handleSubmit(area) {
    const county = district.findByName(area);
    this.setState({
      district: {county},
    })
  }

  handleMatches(letters) {
    const matches = district.findAllMatches(letters);
    const found = matches.reduce((acc, key) => {
      acc[key] = district.data[key]
      return acc
    }, {})

    this.setState({
      district: found,
    })
  }

  compareData(location) {
    if (this.state.compare.length < 2) {
      this.updateCompare(location);
    } else {
      const newCompare = this.state.compare.filter((locationObj, index) =>
      { return !locationObj.compared && locationObj.location !== location });

      this.setState({compare: newCompare})
    }
    this.createComparison()
  }

  updateCompare(location) {
    this.state.compare.unshift(district.findByName(location));
    this.setState({compare: this.state.compare});
  }

  createComparison(){
    if (this.state.compare.length === 2) {
      const data = district.compareDistrictAverages(this.state.compare[0].location, this.state.compare[1].location)
      this.state.compare.push(data)
      this.setState({compare: this.state.compare})
    }

  }

  render() {
    return (
      <div className='app'>
        <h1 className='headline'>Welcome To Headcount 2.0</h1>
        <Controls
          handleSubmit={this.handleSubmit.bind(this)}
          handleSearch={this.handleMatches.bind(this)}
        />
        <CardContainer
          handleData={this.state.district}
          handleCompare={this.compareData.bind(this)}
          handleCompareData={this.state.compare}
          handleComparison={this.state.comparison}/>
      </div>
    );
  }
}

export default App;
