import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
    }
  }

  search() {
    this.props.handleSearch(this.state.location);
  }

  handleOnChange(e) {
    this.setState({location: e.target.value});
    this.search();
  }

  render() {
    return (
      <div className='controls'>
        <input className='input'
          type='text'
          placeholder='Please enter a school district'
          value={this.state.location}
          onChange={(e) => this.handleOnChange(e)}
        />
      </div>
    )
  }
}

Controls.propTypes = {
  handleSearch: PropTypes.func,
  handleSubmit: PropTypes.func,
}
