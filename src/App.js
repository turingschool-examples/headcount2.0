import React, { Component } from 'react';
import './App.css';
import Data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import CardContainer from './CardConatiner.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount = () => {
    const districtRepository = new DistrictRepository(Data);
    this.setState({
      data: districtRepository.stats
    })
  }

  render() {
    return (
      <div>
        <CardContainer data={this.state.data} />
      </div>

    );
  }
}

export default App;
