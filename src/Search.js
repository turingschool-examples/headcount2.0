import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDistrictInput: ''
    }
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      userDistrictInput: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchDistricts(event, this.state.userDistrictInput)
  }

  render() {
    return(
      <form onSubmit={ (event) => this.handleSubmit(event) }>
        <input onChange={ (event) => this.handleInput(event) } type="text"/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Search;