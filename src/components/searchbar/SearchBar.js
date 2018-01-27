import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
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
        <input className='search-bar'
               type='text' 
               placeholder='Filter by County...'
               value={this.state.value}
               onChange={this.handleInput} 
        />
        <p className='instructions'> Click on any two cards to compare data. </p>
      </div>

    )
  }
}

SearchBar.propTypes = { 
  filterCards: PropTypes.func.isRequired
}

export default SearchBar