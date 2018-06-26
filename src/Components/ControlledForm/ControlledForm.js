import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor() {
    super()
    this.state = {
      district: '',
    }
  }


  render() {
    return (
      <form>
        <input/>
        <button>
          Submit
        </button>
      </form>
    )
  }
}

export default ControlledForm