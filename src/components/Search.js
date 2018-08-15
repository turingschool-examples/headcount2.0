import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.filterCards(e.target.value);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="search"
            name="searchValue"
            onChange={this.handleChange}
            value={this.state.searchValue}
            className="search-input"
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  filterCards: PropTypes.func.isRequired
};

export default Search;
