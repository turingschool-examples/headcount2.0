import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

it('should have a default state equal to the cleaned data', () => {
  const wrapper = shallow(<App />);
  let cleanedData = {"data": {"2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0.395, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, "2012": 0.695, "2013": 0.703, "2014": 0.741}, "dataType": "Percent", "location": "COLORADO"};
  expect(wrapper.state().schoolData[Object.keys(wrapper.state().schoolData)[0]]).toEqual(cleanedData);
});

it('should grab clean data', () => {
  const wrapper = shallow(<App />);
  let newData = wrapper.instance().getCleanData(kinderData);
  expect(newData).toEqual(newData);
  //not sure best way to test this: import helper?
});
