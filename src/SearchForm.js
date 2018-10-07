import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.props.searchSchool(event.target.value);
  }

  render() {
    return (
      <div>
        <input className="input" 
          placeholder='Search Schools Here!' 
          onKeyUp={this.handleSearch}/>
      </div>
    );
  }
}

export default SearchForm;