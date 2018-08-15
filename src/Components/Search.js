import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <input type="text"
          onChange={ (e) => this.props.updateCards(e.target.value) }
        />
      </form>
    )
  }
}

export default Search;