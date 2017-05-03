import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super()
    this.state = {
      location: ''
    }
  }

  submitDistrict() {
    this.props.handleSubmit(this.state.location);
    this.setState({location: ''});
  }

  render() {
    return (
      <div>
        <input type='text'
               placeholder='Please enter a school district'
               value={this.state.location}
               onChange={(e) => this.setState({location: e.target.value})}
             />
        <input type='submit'
               onClick={() => this.submitDistrict()}
             />
      </div>
    )
  }
}
