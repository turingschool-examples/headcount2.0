import React, { Component } from 'react';
import Search from './Search';
import CardContainer from './CardContainer';
// import Card from './Card';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import './styles/App.css';

const testDataObject = {
  'School1': {
    2005: {
      Data: 1
    },
    2006: {
      Data: 2
    },
    2007: {
      Data: 3
    },
    2008: {
      Data: 4
    },
    2009: {
      Data: 5
    }
  },
  'School2': {
    2010: {
      Data: 0.1
    },
    2011: {
      Data: 0.2
    },
    2012: {
      Data: 0.3
    },
    2013: {
      Data: 0.4
    },
    2014: {
      Data: 0.5
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataObject: new DistrictRepository(kinderData),
      displayArray: []
    };
  }

  componentDidMount() {
    this.setState({
      displayArray: this.state.dataObject.findAllMatches()
    });
  }

  cardSearch(query) {
    this.setState({
      displayArray: this.state.dataObject.findAllMatches(query)
    });
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <Search cardSearch={this.cardSearch.bind(this)} />
        <CardContainer dataArray={this.state.displayArray} />
      </div>
    );
  }
}

export default App;
