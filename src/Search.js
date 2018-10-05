import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchWord: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchWord: event.target.value
    })
    this.props.searchForDistrict(this.state.searchWord)
  }

  render() {
    return(
      <form>
        <input 
          name="Search" 
          value={this.state.searchWord} 
          placeholder="Search for School District"
          onChange={this.handleChange}
          />
      </form>
    )
  }
}

Search.propTypes = {
  searchForDistrict: PropTypes.func.isRequired
}

export default Search;