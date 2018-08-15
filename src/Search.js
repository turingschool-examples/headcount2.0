import React, { Component } from 'react';

class Search extends Component {

  render() {
    return(
      <form>
        <input onChange={ (event) => this.props.searchDistricts(event.target.value) } type="text"/>
      </form>
    )
  }
}

export default Search;