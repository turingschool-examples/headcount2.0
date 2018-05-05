import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';
import logo from './images/HeadCount.svg';
import SearchField from './SearchField';
import ComparisonContainer from './ComparisonContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolRepository: new DistrictRepository(kinderData),
      schoolNames: [],
      schoolData: {},
      comparedSchools: [],
    };
  }

  searchSchools = (inputValue) => {
    const filteredSchoolNames = this.state.schoolRepository.findAllMatches(inputValue);
    this.setState({ schoolNames: filteredSchoolNames });
    console.log("WHY THO")
    
  }

  componentDidMount() {
    const schoolNames = this.state.schoolRepository.findAllMatches();
    const schoolData = this.state.schoolRepository.stats;
    this.setState({ 
      schoolNames, 
      schoolData
    });
  }

  updateComparedSchools = (string) => {
    const comparedSchools = [string, ...this.state.comparedSchools]
    this.setState({ comparedSchools })
  }

  render() {
    return ( 
      <div>
        <nav className="nav-head">
          <img className="logo" src={logo}/>
          <SearchField 
            searchSchools={this.searchSchools}
          />
        </nav>
        {this.state.comparedSchools.length &&
        <div>
          <ComparisonContainer comparedSchools={this.state.comparedSchools} schoolData={this.state.schoolData}/>
        </div>
        }

        <div className="wrapper">
          
          <CardContainer 
            schoolData={this.state.schoolData} 
            className="card-container"
            schoolNames={this.state.schoolNames}
            updateComparedSchools={this.updateComparedSchools}
          />
        </div>
      </div>
    
      
    
      


    );
  }
}

export default App;
