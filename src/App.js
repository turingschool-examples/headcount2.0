import React, { Component } from 'react';
import './App.css';
import { CardContainer } from './CardContainer.js'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtCards: []
    }
  }

  componentDidMount = (district) => {
    const newDistrict = {...district, id: Date.now()}
    const districtCards = [...this.state.districtCards, newDistrict]
    this.setState({ districtCards })
  }



  render() {
    return (
      <div className='app'> 
        <div className='title'>Welcome To Headcount 2.0</div>
        <input type="text" placeholder="search" className="searchBar"/>
        <CardContainer 
          districts={ district.data }
          />
      </div> 
    );
  }
}

export default App;
