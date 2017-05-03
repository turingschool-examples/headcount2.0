import React, { Component } from 'react';
import './App.css';
import CardsDisplay from './CardsDisplay';
import Controls from './Controls'
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  

  componentDidMount() {
    const renderedData = new DistrictRepository(kinderData);
    this.setState({data: renderedData.data})
    // console.log('consoled: ', renderedData.data)
}




  render() {
    return (
      <main>
        <div>Welcome To Headcount 2.0</div>
        <Controls />
        <CardsDisplay cards={this.state.data}/>
      </main>

    );
  }
}

export default App;
