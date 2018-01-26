import React, { Component } from 'react';
import Controls from './Controls';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import '../styles/App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';

const DistrictData = new DistrictRepository(kinderData);

class App extends Component {

  constructor() {
    super()
    this.state = {
      allDistrictData: []
    }
  }

  componentDidMount() {
     this.setState({
      allDistrictData: DistrictData.data
    })
  }

  handleSearch = (string) => {
    this.setState({
      allDistrictData: DistrictData.findAllMatches(string)
    })
  }

  render() {
    return (
      <section>
        <Controls handleSearch={this.handleSearch} />
        <ComparisonContainer />
        <CardContainer allDistrictData={ this.state.allDistrictData }/>
      </section>
    );
  }
}

export default App;
