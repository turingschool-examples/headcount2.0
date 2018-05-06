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
      comparedSchools: []
    };
  }

  searchSchools = (inputValue) => {
    const filteredSchoolNames = this.state.schoolRepository.findAllMatches(inputValue);
    this.setState({ schoolNames: filteredSchoolNames });
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
    const comparedSchools = this.state.comparedSchools

    if (comparedSchools.includes(string)) {
      comparedSchools.splice(comparedSchools.indexOf(string), 1)
      this.setState({ comparedSchools })
    } else if (comparedSchools.length < 2) {
      comparedSchools.push(string);
      this.setState({ comparedSchools });
    }
  }

  render() {
    return (
      <div>
        <nav className="nav-head">
          <img className="logo" src={logo} alt="head-count" />
          <SearchField
            searchSchools={this.searchSchools}
          />
        </nav>
        <div className="nav-padding"> 
        </div>
        {this.state.comparedSchools.length > 0 &&
          <div>
            <ComparisonContainer
              schoolData={this.state.schoolData}
              schoolRepository={this.state.schoolRepository}
              comparedSchools={this.state.comparedSchools}
              updateComparedSchools={this.updateComparedSchools}
            />
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
