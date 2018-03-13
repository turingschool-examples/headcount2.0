import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import {CardContainer} from './CardContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.district = new DistrictRepository(kinderData);
    this.state={
      data: {}
    }
  }

  getData = () => {
    this.setState({
      data: this.district.stats
    })
  }

  componentDidMount(){
    this.getData()
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <CardContainer data={this.state.data} />


      </div>

    );
  }
}

export default App;
