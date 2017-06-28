import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.sumbitSearch(this.state)
    this.setState({
      searchInput: ''
    })
    console.log('Triggered');
  }

  render() {
    return(
      <div>
        <input value={this.state.searchInput} onChange={(e) => this.setState({searchInput: e.target.value})}/>
        <button onClick={() => {this.handleSubmit()}}>Submit</button>
      </div>
    )
  }
}
export default Input;
