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

 

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
        </header>
        {/* <SelectedCont 
          data={ this.state.data }
          selectedCards={ this.state.selectedCards} 
        /> */}
        <Search data={ this.state.data } />
        <CardCont data={ this.state.data } />
      </div>
    );
  }
}

export default App;
