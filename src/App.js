import React, { Component } from 'react';
import './App.css';
import { CardContainer } from './CardContainer'
import DistrictRepository from './helper'
import Search from './Search.js'

const district = new DistrictRepository()

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtCards: [],
      selectedCards: []
    }
  }

  componentDidMount = () => {
    this.updateCards()
  }

  updateCards = (data) => {
    const districtCards = district.findAllMatches(data)
    this.setState({ districtCards })
  }

  selectCard = (data) => {
    const findCard = district.findByName(data)
    const selectState = this.state.selectedCards
    if (!selectState.includes(findCard) && selectState.length < 2) {
      const selectedCards = [...this.state.selectedCards, findCard]
      this.setState({ selectedCards })
    }
    this.compareCards( this.state.selectedCards )
  }

  deleteCard = (data) => {
    const findCard = district.findByName(data)
  }

  compareCards = (cards) => {
    if (this.state.selectedCards.length > 1) {
      var comparedObject = district.compareDistrictAverages(cards[0].location, cards[1].location)
    }
    console.log(comparedObject)
  }

  render() {
    return (
      <div className='app'> 
        <div className='title'>Welcome To Headcount 2.0</div>
        <Search updateCards={this.updateCards}/>
        <CardContainer 
                      districts={this.state.selectedCards}
                      deleteCard={ this.deleteCard }/>
        <CardContainer 
          districts={ this.state.districtCards }
          selectCard={ this.selectCard }
        />
      </div> 
    );
  }
}

export default App;
