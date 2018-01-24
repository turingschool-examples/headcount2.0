import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


it('should have a default state equal to the cleaned data', () => {
  const wrapper = shallow(<App />);
  
})
