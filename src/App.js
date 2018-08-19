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
      selectedCards: [],
      compareObject: {}
    };
  }

  componentDidMount() {
    this.updateCards();
  }

  updateCards = (string) => {
    const data = allDistricts.findAllMatches(string);
    this.setState({
      data
    }) 
  }

  unselectCards = (location) => {
    const selectedCard = this.statetoSelectedCards
    const filteredCards = this.state.selectedCards.filter(card => card.location !== selectedCard.location)

    this.setSTate({ selectedCards: filteredCards })
  }

  selectCards = (location) => {
    this.compareCards(this.state.selectedCards)
    const selectedCard = allDistricts.findByName(location)
    const selectState = this.state.selectedCards
    if(!selectState.includes(selectedCard) && selectState.length < 2) {
      const selectedCards = [...this.state.selectedCards, selectedCard]
      this.setState({ selectedCards }), () => this.compareCards()
      selectedCard.isSelected = !selectedCard.isSelected
      // const comparedCards = this.compareCards(selectedCard)
      console.log(this.state.selectedCards)
    }
    // if (selectState.includes(selectedCard)) {
    //   this.
    // }
  }

//   selectCards = (location) => {
//     const selectedCard = allDistricts.findByName(location)
//     const selectedCards = [...this.state.selectedCards, selectedCard]

//     if(this.state.selectedCards.length < 2 && !this.state.selectedCards.includes(selectedCard)) {
//       selectedCard.isSelected = !selectedCard.isSelected
//       } 
//     }
//     this.setState({ selectedCards })

//       this.compareCards(this.state.selectedCards)
//   }
// }

  compareCards = (cards) => {
      if(this.state.selectedCards.length === 2) {
        const district1 = this.state.selectedCards[0].location
        const district2 = this.state.selectedCards[1].location
        
        var compareObject = allDistricts.compareDistrictAverages(district1, district2)
        // console.log(compareObject)
        this.setState({ compareObject })
    }


  }

  render() {
    return (
      <div className="headerContainer">
        <h1>HeadCount 2.0</h1>
        <Search 
          updateCards={this.updateCards}
        />
        <CardContainer
          data={this.state.selectedCards}
          selectCards={this.selectCards}
          
        />
        <CardContainer 
          data={this.state.data} 
          selectCards={this.selectCards}
          selected={ false }
        />
      </div>
    );
  }
}

export default App;
