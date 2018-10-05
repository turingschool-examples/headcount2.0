import React, { Component } from 'react';
import Header from '../Header'
import CardContainer from '../CardContainer'
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kinder: {}
    }
  }

  componentDidMount() {
    const kinder = new DistrictRepository(kinderData)

    this.setState({
      kinder: kinder.stats
    })
  }

  render() {
    const kinder = this.state.kinder

    return (
      <div className="App">
        <Header />
        <CardContainer districts={kinder} />
      </div>
    );
  }
}

export default App