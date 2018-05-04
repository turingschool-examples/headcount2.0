import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import logo from './images/HeadCount.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolRepository: new DistrictRepository(kinderData),
      schoolNames: [],
      schoolData: {}
    };
  }

  componentDidMount() {
    const schoolNames = this.state.schoolRepository.findAllMatches();
    const schoolData = this.state.schoolRepository.stats;
    this.setState({ 
      schoolNames, 
      schoolData
    });
  }

  render() {
    return (
      <div>
        <nav className="nav-head">
          <img className="logo" src={logo}/>
          {/* <SearchField /> */}
        </nav>
        <div className="wrapper">
          <CardContainer 
            schoolData={this.state.schoolData} 
            className="card-container"
          />
        </div>
      </div>
    );
  }
}

export default App;
