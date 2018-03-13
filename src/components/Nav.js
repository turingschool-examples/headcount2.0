import React, {Component} from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.searchInput = this.searchInput.bind(this)
  }

  searchInput(e) {
    this.props.search(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <nav>
        <form>
          <input 
            type='text'
            value={this.state.search}
            onChange={this.searchInput}
          />
          <button 
            type='submit'
            >Submit
            </button>
        </form>
      </nav>
    )
  }
}

export default Nav;