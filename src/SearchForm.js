import React, { Component } from 'react';
import DistrictRepository from './helper';

class SearchForm extends Component {
  constructor(props) {
    super(props)
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.props.searchSchool(e.target.value)
  }

  render() {
    return(
      <div>
        <input onKeyUp={this.handleSearch}/>
      </div>
    )
  }
}

export default SearchForm;