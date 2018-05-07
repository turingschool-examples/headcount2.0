import React, { Component } from 'react';
import './styles/App.css';
import CardContainer from './components/CardContainer';
import Search from './components/Search';
import CompareCards from './components/CompareCards';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolStats: null || props.districts.stats,
      districts: props.districts,
      selectedCards: []
    };
  }

  setLocationData = ({ userInput }) => {
    this.setState({
      schoolStats: this.state.districts.findAllMatches(userInput)
    });
  }

  setSelectedCard = (location) => {
    if (this.state.selectedCards.length < 2 && 
      this.state.schoolStats[location].selected === false) {
      let selectedState = this.state.schoolStats[location].selected ?
        false: 
        true;
      let selectedCard = Object.assign(
        this.state.schoolStats[location], 
        {selected: selectedState}
      );

      this.setState({
        selectedCards: [selectedCard, ...this.state.selectedCards]
      });
    } else if (this.state.schoolStats[location].selected === true) {
      Object.assign(
        this.state.schoolStats[location], 
        {selected: false}
      );

      this.setState({
        selectedCards: 
        this.state.selectedCards.filter(card => card.location !== location)
      });
    }
  }
 
  render() {
    return (
      <main>
        <h1>HeadCount 2.0</h1>
        <Search setLocationData={this.setLocationData}/>
        <section className="comparisonContainer">
          <CompareCards
            selectedCards={this.state.selectedCards} 
            setSelectedCard={this.setSelectedCard} 
            districts={this.state.districts} 
          />
        </section>
        <CardContainer
          stats={this.state.schoolStats} 
          setSelectedCard={this.setSelectedCard} 
        />
      </main>
    );
  }
}

App.propTypes = {
  districts: PropTypes.object.isRequired
};

export default App;
