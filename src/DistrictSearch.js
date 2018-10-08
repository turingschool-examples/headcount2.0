import React, { Component } from 'react';
import './DistrictSearch.css';
import PropTypes from 'prop-types';


class DistrictSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const {value} = event.target;
    this.setState({searchString: value}, () => this.handleSearch());
  }

  handleSearch = () => {
    this.props.handleSubmit(this.state.searchString);
  }


  render() {
    return (
      <form> 
        <input 
          placeholder='search'
          value={this.state.value} 
          onChange={this.handleChange}/>
      </form>
    );
  }
}

DistrictSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};


export default DistrictSearch;