import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    console.log(this.props)
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value})
    this.props.filterData(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.filterData(this.state)
    this.setState({ search: '' })
  }

  // searchMatches = (this.props.data) => {


  // }

  // create options
  // intake props of this.state
  // map over array
  // output options

    
  render() {
    const options = this.props.data.map( district => {
      return <option value={district.location} key={Math.round()} />
    })

    return(
      <div>
        <form 
          className="Search"
          onSubmit={this.handleSubmit}
          >
          <input 
            className="input-search"
            list="matches"
            value={this.state.search}
            placeholder="Search for School District"
            name="search"
            onChange={this.updateSearch}
            />
          <datalist id='matches'>
            { options }
          </datalist>
          <button className="submit-search">Submit</button>
          <button 
            className="display-all"
            onClick={() => this.props.displayAll()}
            >Display All</button>
        </form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  filterData: PropTypes.func.isRequired
}

export default SearchForm