import React, { Component } from 'react';
// import kinderData from './testData.js';
import DistrictRepository from './helper';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      school: ''
    };
  }

  inputChange = (event) => {
    this.setState({
      school: event.target.value
    });
    this.props.searchSchool(this.state.school);
  }

  render() {
    return (
      <form>
        <input
          placeholder='Search for District'
          name='Search'
          value={this.state.school}
          onChange={this.inputChange}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  searchSchool: PropTypes.func.isRequired
};
