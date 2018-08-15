import React, { Component } from 'react';
import DistrictRepository from './helper'
import './App.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer'
import Search from './Search'

const allDistricts = new DistrictRepository(kinderData)

class App extends Component {
  constructor(props) {
    super(props)
    // this.allDistricts = new DistrictRepository(kinderData)
    this.state = {
          data: []
    }
  }

  componentDidMount() {
    this.updateCards();
  }

  updateCards = (string) => {
    let cardData = allDistricts.findAllMatches(string)

    this.setState({
      data: cardData
    }) 
  }

  render() {
    return (
      <div className="headerContainer">
        <h1>HeadCount 2.0</h1>
        <Search updateCards={this.updateCards}/>
        <CardContainer data={ this.state.data }/>
      </div>
    );
  }
}

export default App;
