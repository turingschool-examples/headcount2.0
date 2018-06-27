import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Search from '../Search/Search';
import ComparedContainer from '../ComparedContainer/ComparedContainer';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      schoolStats: this.props.districts.stats,
      searchResult: [],
      selectedCards: []
    }
  }

  submitSearch = (search) => {
    const searchEntry = this.props.districts.findAllMatches(search)
    
    this.setState({searchResult: searchEntry})
  }

  selectCard = (location) => {
    const foundCard = this.props.districts.findByName(location)
    foundCard.selected = !foundCard.selected
    this.setSelected()
  }

  setSelected = () => {
    if (this.state.selectedCards.length <= 2) {
      const selectedCards = this.state.schoolStats.filter(school => school.selected)
      this.setState({ selectedCards })
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Header /> 
        </header>
        <Search
          submitSearch={this.submitSearch}
        />
        <ComparedContainer 
          selectedCards={this.state.selectedCards}
          selectCard={this.selectCard}
        />
        <CardContainer
          schoolStats={this.state.schoolStats}
          searchResults={this.state.searchResult}
          selectCard={this.selectCard}
        />
      </div>
    );
  }
}

export default App;
