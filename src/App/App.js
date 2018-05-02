import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js'
import DistrictRepository from '../helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js'

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
        districtsData: null
  }
  }

  componentDidMount() {
    let newData = new DistrictRepository(kinderData)
    this.setState({
      districtsData: newData.stats
    })
  }

  render() {
    if(this.state.districtsData === null) {
      return(
        <p>Please Wait</p>
      )
    }
    return (
      <div> 
        <CardContainer 
          districtsData ={ this.state.districtsData }
        />
      </div>
    );
  }
}


export default App;
