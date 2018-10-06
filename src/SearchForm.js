import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filterData(this.state)
    this.setState({ search: '' })
  }

  render() {
    return(
      <div>
        <form 
          className="Search"
          onSubmit={this.handleSubmit}
          >
          <input 
            className="input-search"
            value={this.state.search}
            placeholder="Search for School District"
            name="search"
            onChange={this.updateSearch}
            />
          <button className="submit-search">Submit</button>
        </form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  filterData: PropTypes.func.isRequired
}

export default SearchForm