import React, { Component } from 'react';
import PropTypes from 'prop-types';

import districtData from './dataHelper';

class DistrictDropDown extends Component {
  constructor() {
    super();
    this.state = {
      location: 'KINDERGARTNERS IN FULL DAY PROGRAM',
      dropDownDisplay: false
    };
  }

  handleSelection = (event) => {
    const location = event.target.id;
    const matchingDataSet = districtData.find( dataSet => (
      dataSet.title === location
    ));

    this.setState({ location });
    this.props.changeDistrictData(matchingDataSet.data);
  }

  toggleDropDown = () => {
    this.setState({ dropDownDisplay: !this.state.dropDownDisplay })
  }

  render() {
    const totalDataTypes = districtData.map( (dataSet, index) => (
      <li 
        id={dataSet.title}
        key={index}
        onClick={this.handleSelection}>
        {dataSet.title}
      </li>
    ));
    const headerSelected = this.state.dropDownDisplay ? 'CardContainer__header--selected' : '';
    const dropDownDiplayed = this.state.dropDownDisplay ? 'dropdown-content--show' : '';

    return (
      <div className="dropdown">
        <h1 
          onClick={this.toggleDropDown} 
          className={'CardContainer__header ' + headerSelected} >
          {this.state.location}
        </h1>
        <ul 
          onClick={this.toggleDropDown} 
          className={'dropdown-content ' + dropDownDiplayed} >
          {totalDataTypes}
        </ul>
      </div>
    );
  }
}

export default DistrictDropDown;

DistrictDropDown.propTypes = {
  changeDistrictData: PropTypes.func
};

