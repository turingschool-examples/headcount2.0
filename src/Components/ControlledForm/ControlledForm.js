import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor() {
    super()
    this.state = {
      district: '',
    }
  }

  handleChange = (event) => {
    const input = event.target.value;
    this.setState({district: input})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.findDistrict(this.state.district)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange} 
          value={this.state.district} 
          placeholder='Enter District'
        />
        <button>
          Submit
        </button>
      </form>
    )
  }
}

export default ControlledForm