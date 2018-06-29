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
  }

  render() {
    return(
        <form onSubmit={this.props.updateDistricts}>
          <label>Search : </label>
          <input 
            type="text" 
            placeholder="Enter your district"
            value={this.state.district}
            onChange={this.handleInput}/>
        <button onSubmit={this.props.updateDistricts} >Submit</button>
        </form>
    )
  }
}

SearchForm.propTypes = {
  updateDistricts: PropTypes.func
};