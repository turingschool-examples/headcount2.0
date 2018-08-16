import React, { Component } from 'react';
import './App.css';
import { CardContainer } from './CardContainer'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js';
import Search from './Search.js'

const district = new DistrictRepository()

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtCards: []
    }
  }

  componentDidMount = () => {
    this.updateCards()
  }

  updateCards = (data) => {
    const districtCards = district.findAllMatches(data)
    this.setState({ districtCards })
  } 

  render() {
    return (
      <div className='app'> 
        <div className='title'>Welcome To Headcount 2.0</div>
        <Search updateCards={this.updateCards}/>
        <CardContainer 
          districts={ this.state.districtCards }
        />
      </div> 
    );
  }
}

export default App;
