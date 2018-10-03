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

  processInput = (e) => {
    this.setState({
    input: e.target.value
    })
    this.props.processFilter(e.target.value)
  }

  render() {

    return (
      <form className="input-form">
        <input 
          className="text-input"
          value={this.state.input}
          placeholder='Enter your school district'
          onChange={(e) => {
            this.processInput(e)
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