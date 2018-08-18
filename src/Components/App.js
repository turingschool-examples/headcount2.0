import React, { Component } from 'react';
import './App.css';
import CardCont from './CardCont';
import SelectedCont from './SelectedCont';
import Search from './Search';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

const districtRepo = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedCards: []
    }
  }

  componentDidMount() {
    this.updateCards()
  }

  updateCards = (input) => {
    const data = districtRepo.findAllMatches(input);

    this.setState({ data })
  }

  selectCard = (input) => {
    const foundCard = districtRepo.findByName(input);
    let selectedCards = [...this.state.selectedCards]
   
    if (selectedCards.includes(foundCard.location)) {
      this.deselectDuplicates(foundCard.location)
      return
    }
    
    if (selectedCards.length === 2) {
      selectedCards.splice(0, 1, foundCard)
    } else {
      selectedCards.push(foundCard)
    }
    
    this.setState({ selectedCards })
    foundCard.isSelected = !foundCard.isSelected
  }


    this.setState({ selectedCards })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
        </header>
        {/* <SelectedCont /> */}
        <Search updateCards={ this.updateCards } />
        <CardCont 
          data={this.state.data}
          selectCard={this.selectCard} 
        />
      </div>
    );
  }
}

export default App;
