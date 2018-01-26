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
      allDistrictData: [],
      cardCompData: []
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

  compareCards = (string) => {
    //2nd card clicked replace cardCompData[2]
    //if card clicked 2 time toggle back to mock data
    //maybe reduce to shift/unshift 1 card clicked pop/push 2nd card clicked???
    
    //add
    //reduce this.state.cardCompData((accu, data, index))
    //add counter
    //if clicked 1st time 
    // counter++ replace cardCompData1 data
    //if same card clicked counter-- && id replace with mock data
    //if this works do the same for cardCompData2

    console.log(string)
    let location1 = DistrictData.findByName(string)
    this.setState({
      cardCompData: location1
    })
    console.log(this.state.cardCompData)
  }

  render() {
    return (
      <section>
        <Controls handleSearch={this.handleSearch} />
        <ComparisonContainer cardCompData={ this.state.cardCompData }/>
        <CardContainer allDistrictData={ this.state.allDistrictData } compareCards={ this.compareCards }/>
      </section>
    );
  }
}

export default App;
