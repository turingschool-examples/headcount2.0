import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super()
    this.state = {
      location: '',
      data: ''
    }
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.props.searchSchool(e.target.value)
  }

  render() {
    return(
      <div>
        <input />
      </div>
    )
  }
}

export default SearchForm;