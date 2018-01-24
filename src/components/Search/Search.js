import React, {Component} from 'react'
import './Search.css'
class Search extends Component {
  constructor() {
    super()
    this.state = {
      query: ""
    }
  }

  handleInput = (e) => {
    this.setState({query: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input 
            type="text" 
            placeholder="Search District"
            value={this.state.query}
            onChange={this.handleInput} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Search;