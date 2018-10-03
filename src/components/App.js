import React, { Component } from 'react'; 

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper.js'

import CardContainer from './CardContainer'
import InputField from './InputField'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: undefined,
      filter: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: new DistrictRepository(kinderData)
    })
  }

  render() {
    if (this.state.data) {
      return (
        <main className="app">
          <h1>Welcome To Headcount 2.0</h1>
          <InputField />
          <CardContainer data={this.state.data} />
        </main>
      );
    } else {
      return (
        <main className="app">
        
        </main>
      )
    }
  }
}



export default App;
