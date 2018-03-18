import React, {Component} from 'react';
import '../styles/Nav.css';
import PropTypes from 'prop-types';
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

  clearSearch = (e) => {
    e.preventDefault();
    this.props.search('');
    this.setState({search: ''})
  }

  render() {
    return (
      <nav>
        <form>
          <input 
            type='text'
            value={this.state.search}
            onChange={this.searchInput}
            placeholder='Search District information (i.e. Academy 20)'
          />
          <button 
            onClick={this.clearSearch}
            className='clear-search'>X</button>
        </form>
      </nav>
    )
  }
}

Nav.propTypes = {
  search: PropTypes.func
}

export default Nav;