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
    this.props.searchSchools(event.target.value);
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
          className="user-input"
        />
      </form>
    );
  }
}

SearchField.propTypes = {
  searchSchools: PropTypes.func
};

export default SearchField;