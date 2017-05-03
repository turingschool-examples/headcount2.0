/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom';
import App from '../Components/App';
import DistrictRepository from '../../src/Helpers/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Caaard Grid', () =>{
  const schoolsData = new DistrictRepository(kinderData)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const wrapper = shallow(<App />)
    // ReactDOM.render(<App />, div);
  });



})
