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
    this.setState({searchString: value}, () => this.handleSearch());
    // this.handleSearch();
    // this.handleSearch(e);
  }

  handleSearch = (e) => {
    this.props.handleSubmit(this.state.searchString);
  }


  render() {
    return (
        <form> 
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