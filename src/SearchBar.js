import React, {Component} from 'react';
import { findbyName, findAllMatches } from './helper.js';

class SearchBar extends Comnponent{
  constructor() {
    super();
    this.state= {
      search: ''
    }

  }

  render() {
    return (
      <div>
        <input type='text' />
      </div>
    )
  }
}