import React, { Component } from 'react';
import './App.css';
import { CardContainer } from './CardContainer'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js';
import Search from './Search.js'

// const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
    this.state = {
      district: new DistrictRepository(kinderData),
      districtCards: []
    }
  }

  componentDidMount = () => {
    const newDistrict = {...this.state.districtCards, id: Date.now()}
    const districtCards = [...this.state.districtCards, newDistrict]
    this.setState({ districtCards })
  }

  updateCards = (name) => {
    const filteredCards = this.state.district.findAllMatches(name)
    const filteredDistricts = {...filteredCards, id: Date.now()}
    const districtCards = [filteredDistricts]
    this.setState({ districtCards})
  } 

  render() {
    return (
      <div className='app'> 
        <div className='title'>Welcome To Headcount 2.0</div>
        <Search updateCards={this.updateCards}/>
        <CardContainer 
          districts={ this.state.district }
        />
      </div> 
    );
  }
}

export default App;
