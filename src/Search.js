import React, { Component } from 'react';
import './styles/search.css';
import PropTypes from 'prop-types'


class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.filterData(event.target.value);
  }

  render() {
    return (
        <input  type="search"
                placeholder="Search for a district"
                onChange={this.handleChange}
        />
    );
  }
}

Search.propTypes = {
  filterData: PropTypes.func
}

export default Search;