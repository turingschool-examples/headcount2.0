import React, { Component } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      district: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      district: event.target.value
    })
  }

  render() {
    return(
        <form onSubmit={this.props.updateDistricts}>
          <label>Search : </label>
          <input 
            type="text" 
            placeholder="Enter your district"
            value={this.state.district}
            onChange={this.handleInput}/>
          <button type="submit">Submit</button>
        </form>
    )
  }
}