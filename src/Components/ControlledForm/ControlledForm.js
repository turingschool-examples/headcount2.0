import React, { Component } from 'react';
import './ControlledForm.css';
import PropTypes from 'prop-types';

class ControlledForm extends Component {

  handleChange = (event) => {
    const input = event.target.value;
    this.props.findDistrict(input)
  }

  render() {
    return (
      <form>
        <input 
          onChange={this.handleChange} 
          placeholder='Enter District'
        />
      </form>
    )
  }
}

  ControlledForm.propTypes = {
  findDistrict: PropTypes.func.isRequired
}

export default ControlledForm