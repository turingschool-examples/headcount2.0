import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import Districts from './components/Districts';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolStats: null || props.districts.stats,
      districts: props.districts,
      selectedCard: null
    };
  }

  setLocationData = ({userInput}) => {
    this.setState({
      schoolStats: this.state.districts.findAllMatches(userInput)
    });
  };

  setSelectedCard = (location) => {
    this.setState({
      selectedCard: this.state.schoolStats[location]
    })
  }
 
  render() {
    return (
      <main>
        <h1>HeadCount 2.0</h1>
        <Search setLocationData={this.setLocationData}/>
        <Districts stats={this.state.schoolStats} setSelectedCard={this.setSelectedCard} selectedCard={this.state.selectedCard} />
      </main>
    );
  }
}

export default App;
