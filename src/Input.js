import React, { Component } from 'react'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(searchInput) {
    this.props.submitSearch(searchInput)
    this.setState({
      searchInput: ''
    })
  }

  render() {
    return(
      <div>
        <input value={this.state.searchInput}
               onChange={(e) => this.setState({searchInput: e.target.value})}/>
             <button onClick={() => {this.handleSubmit(this.state.searchInput)}}>Submit</button>
      </div>
    )
  }
}
export default Input;
