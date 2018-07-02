import React, { Component } from 'react';
import './App.css';
import ControlledForm from '../ControlledForm/ControlledForm';
import DistrictRepository from './helper';
import CardContainer from '../CardContainer/CardContainer';
import ComparisonContainer from '../ComparisonContainer/ComparisonContainer'

const districtRepository = new DistrictRepository()

class App extends Component {
  constructor() {
    super()
    this.state = {
      matchingDistricts: {},
      comparedDistricts: {}
    }
  }

  componentDidMount() {
    this.setState({ matchingDistricts: districtRepository.stats })
  }

  findDistrict = (input) => {
    const filteredDistricts = districtRepository.findAllMatches(input);
    this.setState({ matchingDistricts: filteredDistricts });
  }
 
  selectDistrict = (districtName) => {
    const clickedDistrict = districtRepository.findByName(districtName);
    const districtsToCompare = Object.keys(this.state.comparedDistricts)

    if (!clickedDistrict.selected && districtsToCompare.length < 2) {
      clickedDistrict.selected = true;
      this.setState({ matchingDistricts: {...this.state.matchingDistricts, 
                                          [clickedDistrict.location]: clickedDistrict}})
      this.setState({ comparedDistricts: {...this.state.comparedDistricts, 
                                          [clickedDistrict.location]: clickedDistrict}})

    } else if (clickedDistrict.selected) {
      delete clickedDistrict.selected
      districtsToCompare.reduce((newComparison, district) => {
        if (this.state.comparedDistricts[district].selected) {
            newComparison[district] = this.state.comparedDistricts[district]
        }
        this.setState({comparedDistricts: newComparison})
        return newComparison
      }, {})
      this.setState({ matchingDistricts: {...this.state.matchingDistricts, [clickedDistrict.location]: clickedDistrict}})
    }
  } 


  render() {
    return (
      <div>
        <h1>Count dem Heads</h1>
        <ControlledForm 
          findDistrict={this.findDistrict}/>
        <ComparisonContainer
          comparedDistricts={this.state.comparedDistricts}
          compareDistrictAverages={districtRepository.compareDistrictAverages}
          selectDistrict={this.selectDistrict}
        />
        <CardContainer 
          matchingDistricts={this.state.matchingDistricts}
          selectDistrict={this.selectDistrict}
        />
      </div>
    );
  }
}


export default App;
