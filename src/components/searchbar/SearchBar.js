import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props)
      this.state = {
        value: ''
      }

  }

  handleInput = (e) => {
    this.setState( {
      value: e.target.value
    })
    this.props.filterCards(this.state.value)
  }

  render() {

    return (
      <div>
        <input type='text' 
               placeholder='Districts'
               value={this.state.value}
               onChange={this.handleInput} 
        />
      </div>

    )
  }
}

SearchBar.propTypes = { 
  filterCards: PropTypes.func.isRequired
}

export default SearchBar