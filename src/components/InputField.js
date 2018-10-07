import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/InputField.css';

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      clearFilter: 'clear-input-button hidden-button'
    };
  }

  processInput = (value) => {
    if (value !== '' ) {
      this.setState({
        input: value,
        clearFilter: 'clear-input-button'
      });
    } else {
      this.setState({
        input: value,
        clearFilter: 'clear-input-button hidden-button'
      });
    }
    this.props.processFilter(value);
  }

  render() {
    return (
      <form className="input-form">
        <input 
          className="text-input"
          value={this.state.input}
          placeholder='Search for your school district...'
          onChange={(event) => {
            this.processInput(event.target.value);
          }}
          aria-label='district-filter-input-field'
        />
        <img 
          src='./cancel.svg'
          alt='cancel-button'
          className={this.state.clearFilter}
          aria-label='clear-filter-input'
          onClick={() => {
            this.processInput('');
          }}
        />
      </form>
    );
  }
}

InputField.propTypes = {
  processFilter: PropTypes.func.isRequired
};

export default InputField;