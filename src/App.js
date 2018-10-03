import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper'
import KinderData from './data/kindergartners_in_full_day_program.js'
import CardContainer from './CardContainer'



class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
    }
  }


  componentDidMount() {
    const district = new DistrictRepository(KinderData);
    const stats = district.stats
    this.setState({data: stats })
  }




  render() {
    const { data } = this.state
    return (
      <div>
        <CardContainer data={data} />
      </div>
    );
  }
}

export default App;
