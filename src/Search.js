import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.cardSearch(event.target.value);
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search for a school district...'
          value={this.state.input}
          onChange={this.handleChange}
          aria-label='district search' />
      </div>
    );
  }
}
