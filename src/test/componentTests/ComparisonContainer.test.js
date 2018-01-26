import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonContainer from '../../components/ComparisonContainer';
import { shallow, mount } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<ComparisonContainer/>)
  expect(renderedComponent).toMatchSnapshot()
})

it('should create a card created by a card array', () => {
  
  const mockedDistrict = {"data": {"2004": 0.24, 
                          "2005": 0.278, 
                          "2006": 0.337, 
                          "2007": 0.395, 
                          "2008": 0.536, 
                          "2009": 0.598, 
                          "2010": 0.64, 
                          "2011": 0.672, 
                          "2012": 0.695, 
                          "2013": 0.703, 
                          "2014": 0.741}, 
                          "location": "COLORADO"}
  const renderedComponent = mount(<ComparisonContainer compare={mockedDistrict} />)

  expect(renderedComponent.find('.card').length).toEqual(1);
})