import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      district: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      district: event.target.value
    })
    this.props.updateDistricts(event.target.value)
    
  }

  render() {
    return(
        <form>
          <input 
            type="text" 
            placeholder="Search for your district by name"
            aria-label="search field"
            value={this.state.district}
            onChange={this.handleInput}/>
        </form>
    )
  }
}

SearchForm.propTypes = {
  updateDistricts: PropTypes.func
};