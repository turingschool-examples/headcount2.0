import React, { Component } from 'react';
import Data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import CardContainer from './CardContainer.js';
import Search from './Search.js'
import './App.css';


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
        <h1 className="header">HeadCount <span className="num">2.0</span></h1>
        <Search />
        <CardContainer data={this.state.data} />
      </div>

    );
  }
}

export default App;
