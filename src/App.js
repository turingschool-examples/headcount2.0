import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Districts from './components/Districts';

class App extends Component {
  constructor() {
    super();

    const district = new DistrictRepository(kinderData);

    this.state = {
      schoolStats: null || district.stats
    }
  };

  // addClass() {
  //   const dataSpans = document.querySelectorAll('li span');
    
  //   dataSpans.forEach(span => {
  //     if(span.innerHTML < 0.5) {
  //       console.log(span)
  //       span.classList.add('below'); 
  //     }
  //   })

  //   }

  componentDidMount() {
    // this.addClass();
    this.setState({
      stats: DistrictRepository.stats
    })
  }
 
  render() {
    return (
      <main>
        <h1>HeadCount 2.0</h1>
        <Districts stats={this.state.schoolStats} />
      </main>
    );
  }
}

export default App;
