import React, { Component } from 'react';
import DistrictRepository from './helper'
import './App.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer';
import Search from './Search';

const allDistricts = new DistrictRepository(kinderData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCards: []
    };
  }

  componentDidMount() {
    this.updateCards();
  }

  updateCards = (string) => {
    let data = allDistricts.findAllMatches(string);
    this.setState({
      data
    }) 
  }

  selectCards = (location) => {
    const selectedCard = allDistricts.findByName(location)
    const selectedCards = [...this.state.selectedCards, selectedCard]
    this.setState({ selectedCards })
    // console.log(this.state.selectedCards)
      this.compareCards()
  }

  //Data type appears to be an object yet I cannot access keys using dot notation or object.keys. WTF

  compareCards = () => {
    let district1 = this.state.selectedCards[0]
    let district2 = this.state.selectedCards[1]
    console.log(district2.location)
    const comparedCards = this.state.selectedCards.forEach(card => { 
      if(this.state.selectedCards.length === 2) {

        // let sumDistrict1 = allDistricts.compareDistrictAverages(district1, district2)
        // let summedDistrict1 = allDistricts.findAverage(district1)
        // let summedDistrict2 = allDistricts.findAverage(district2)
  

        // let splitCard = Object.values(card.stats)
        // let district1 = Object.keys(card)
        // console.log(splitCard)
      }
    })


  }

  render() {
    return (
      <div className="headerContainer">
        <h1>HeadCount 2.0</h1>
        <Search 
          updateCards={this.updateCards}
        />
        <CardContainer 
          data={this.state.data} 
          selectCards={this.selectCards}
        />
      </div>
    );
  }
}

export default App;
