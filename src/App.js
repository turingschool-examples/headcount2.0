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
      data: []
    }
    }
  componentDidMount(){
    const data = this.state.schools.findAllMatches()
    this.setState({data})
  }

  
  render() {
    return (
      <div>
        <h1>HeadCount</h1>
        {/* <CardContainer schools={this.state.schools}/> */}
      </div>
    );
  }
}

export default App;
