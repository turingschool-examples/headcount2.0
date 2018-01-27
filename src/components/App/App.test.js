/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('should have a default state equal to the cleaned data', () => {
  const wrapper = shallow(<App />);
  let cleanedData = 
      {"data": {"2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0.395, 
        "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, 
        "2012": 0.695, "2013": 0.703, "2014": 0.741}, 
      "dataType": "Percent", "location": "COLORADO"};
  expect(wrapper.state().schoolData[Object.keys(wrapper.state()
    .schoolData)[0]]).toEqual(cleanedData);
});

it('should update state with a new instance of DistrictRepository', () => {
  const wrapper = shallow(<App />);
  const rawData = 
    [{Location: 'Colorado', TimeFrame: 2007, 
      DataFormat:'Percent', Data:.337 }];
  const cleanData = 
    {"data": {"COLORADO": {"data": {"2007": 0.337}, 
      "dataType": "Percent", "location": "COLORADO"}}};
  wrapper.instance().getDistrictRepository(rawData);
  expect(wrapper.state().districtRepository).toEqual(cleanData);
});

it('should update state when handleSearch is activated', () => {
  const wrapper = mount(<App />);
  let searchDataReplica = 
    {"data": {"2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, 
      "2008": 0.385, "2009": 0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, 
      "2013": 0.488, "2014": 0.49}, "dataType": "Percent", 
    "location": "ACADEMY 20"};
  
  expect(wrapper.find('input').simulate('change', {target: {value: 'col'}}));
  expect(wrapper.state().searchResults.length).toEqual(2);
  
  expect(wrapper.find('input').simulate('change', {target: {value: 'aca'}}));
  expect(wrapper.state().searchResults.length).toEqual(1);
  expect(wrapper.state().searchResults).toEqual([searchDataReplica]);  
});

// This test works no matter what the first card is
it('when the first card is clicked its object should be entered in state', () => {
  const wrapper = mount(<App />);
  wrapper.find('article').first().simulate('click');
  expect(wrapper.state().compareSchool1)
    .toEqual({
      "data": {
        "2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0.395, "2008": 0.536,
        "2009": 0.598, "2010": 0.64, "2011": 0.672, "2012": 0.695, "2013": 0.703,
        "2014": 0.741},
      "dataType": "Percent",
      "location": "COLORADO"
    });
});

// This test only works for the KinderData cards.
it('when a 2nd card is clicked it puts a comparison object in state', () => {
  const wrapper = mount(<App />);
  wrapper.find('article').first().simulate('click');
  wrapper.find('article').last().simulate('click');
  expect(wrapper.state().comparison)
    .toEqual({
      "COLORADO": 0.53,
      "YUMA SCHOOL DISTRICT 1": 0.909,
      "compared": 0.583
    });
});