import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
    }
  }

  submitDistrict() {
    this.props.handleSubmit(this.state.location);
    this.setState({location: ''});
  }

  autoComplete() {
    this.props.handleAutoComplete(this.state.location);
  }

  handleOnChange(e) {
    this.setState({location: e.target.value});
    this.autoComplete();
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
        <input className='submitButton'
          type='submit'
          onClick={() => this.submitDistrict()}
             />
      </div>
    )
  }
}
