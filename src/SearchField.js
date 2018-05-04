import React, { Component } from 'react';
import './styles/SearchField.css';
import PropTypes from 'prop-types';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleSearch = (event) => {
    this.setState({inputValue: event.target.value});
    this.props.searchSchools(this.state.inputValue);
  }


  render() {
    return (
      <form className="search-form">
        <input 
          type="text" 
          name="search" 
          placeholder="Search school"
          value={this.state.inputValue}
          onChange={this.handleSearch}
        />
      </form>
    );
  }
}

SearchField.propTypes = {
  findAllMatches: PropTypes.func.isRequired
};

export default SearchField;