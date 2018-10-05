import React, { Component } from 'react';
import './App.css';
import CardContainer from './Components/CardContainer/CardContainer';
import DistrictRepository from './helper.js';
import kinderdata from './data/kindergartners_in_full_day_program.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      districtData: {}
    }

  }

  componentDidMount(){
    const districts = new DistrictRepository(kinderdata);
    const stats = districts.stats;
    console.log(stats)
    this.setState({
      districtData: stats
    })
  }

  render() {

    const { districtData } = this.state;

    return (

      <div>Welcome To Headcount 2.0!!!!!
      <CardContainer stats={districtData} />
      </div>

    );
  }
}

//do proptypes here

export default App;
