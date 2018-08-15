import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import React, { Component } from 'react';
import './App.css';
import DistrictContainer from './DistrictContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
     data: {} 
    }
  }

  componentDidMount = () => {
    const district = new DistrictRepository(kinderData);
    this.setState({ data: district.stats});
  }

  render() {
    return (
      <div>

        {/* inputs */}

        {/* district container */}
        <DistrictContainer data={this.state.data}/>

      </div>
    );
  }
}

export default App;
