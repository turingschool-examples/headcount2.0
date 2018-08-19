import React, { Component } from 'react';
import PropTypes from 'prop-types';

import districtData from './dataHelper';

class DistrictDropDown extends Component {
  constructor() {
    super();
    this.state = {
      location: 'KINDERGARTNERS IN FULL DAY PROGRAM'
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

  render() {
    const totalDataTypes = districtData.map( (dataSet, index) => (
      <li 
        id={dataSet.title}
        key={index}
        onClick={this.handleSelection}>
        {dataSet.title}
      </li>
    ));

    return (
      <div className="dropdown">
        <h1 
          onClick={ () => this.props.toggleDropDown() } 
          className='CardContainer__header'>
            {this.state.location}
        </h1>
        <ul onClick={ () => this.props.toggleDropDown() } className="dropdown-content">
          {totalDataTypes}
        </ul>
      </div>
    );
  }
}

export default DistrictDropDown;

DistrictDropDown.propTypes = {
  toggleDropDown: PropTypes.func,
  changeDistrictData: PropTypes.func
};

