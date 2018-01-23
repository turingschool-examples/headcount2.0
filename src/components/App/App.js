import React, { Component } from 'react';
import astronomy from '../../images/astronomy.svg';
import '../../normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="Control">
          <div className="input-cont">
            <i class="fa fa-search" aria-hidden="true"></i>
            <label htmlFor="search"></label>
            <input type="text"
                   id="search"
                   placeholder="Search by School"
            />
            <label htmlFor="submit"></label>
            <input type="submit"
                   id="submit"
            />
          </div>
          <h1>Education Colorado</h1>
        </div>

        <div className="CardContainer">
          <div className="bottom-images">
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />
            <img src={astronomy} className='school-icon' />

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;


//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts