import React from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleSubmit = (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text"
          value={ this.state.input }
          onChange={ (e) => this.handleChange(e) }
        />
      </form>
    )
  }
}