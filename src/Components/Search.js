import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Search.propTypes = { updateCards: PropTypes.func }

export default Search;