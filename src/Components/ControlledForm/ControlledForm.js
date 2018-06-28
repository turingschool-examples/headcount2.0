import React, { Component } from 'react';

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

export default ControlledForm