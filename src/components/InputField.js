import React, { Component } from 'react';

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


export default InputField;