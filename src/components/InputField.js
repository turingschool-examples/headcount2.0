import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../css/InputField.css'

class InputField extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  processInput = (value) => {
    this.setState({
      input: value
    })
    this.props.processFilter(value)
  }

  render() {

    return (
      <form className="input-form">
        <input 
          className="text-input"
          value={this.state.input}
          placeholder='Search for your school district...'
          onChange={(e) => {
            this.processInput(e.target.value)
          }}
        />
      </form>
    )
  }
}

InputField.propTypes = {
  processFilter: PropTypes.func.isRequired
}

export default InputField;