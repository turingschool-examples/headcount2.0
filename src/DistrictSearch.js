import React, { Component } from 'react';
import './DistrictSearch.css';

class DistrictSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const {value} = e.target;
    this.setState({searchString: value});
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.searchString);
    this.setState({
      searchString: '',
    });
  }


  render() {
    return (
        <form onSubmit={this.handleSearch}>
          <input 
            placeholder='search'
            value={this.state.value} 
            onChange={this.handleChange}
             />
        </form>
      )
  }
}


export default DistrictSearch