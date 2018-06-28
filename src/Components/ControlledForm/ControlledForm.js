import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ControlledForm extends Component {
  constructor(props) {
    super(props)
  }

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

  ControlledForm.PropTypes = {
  findDistrict: PropTypes.func.isRequired
}

export default ControlledForm