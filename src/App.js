import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program'
import CardContainer from './CardContainer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      schools: new DistrictRepository(kinderData),
      data: [],
      schoolObject: new DistrictRepository(kinderData).stats
    }
  }
  
    componentDidMount(){
    const data = this.state.schools.findAllMatches()
    this.setState({data})
    // console.log('pew', this.state.schoolObject)
  }

  
  render() {
    return (
      <div>
        <h1>HeadCount</h1>
        {/* <SearchField /> */}
        <CardContainer schoolObj={this.state.schoolObject}/>
      </div>
    );
  }
}

export default App;
