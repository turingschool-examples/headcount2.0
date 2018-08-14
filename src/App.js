import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './Helper'
import kinderData from './data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    this.updateCards()
  }

  updateCards = (string) => {
    let cardList = district.findAllMatches(string)
    this.setState({
      data: cardList
    })
  }

  render() {
    return (
      <div>
        <CardContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
