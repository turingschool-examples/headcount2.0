import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import CardContainer from './CardContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }
  render() {
    return (
      <div>Welcome To Headcount 2.0
        <SearchForm />
        {/* <ComparisonContainer /> */}
        <CardContainer cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
