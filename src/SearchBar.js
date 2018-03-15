import React, { Component } from 'react';
import { findbyName, findAllMatches } from './helper.js';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state= {
      search: ''
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}