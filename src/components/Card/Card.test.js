/* eslint-disable */
import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('snapshot test', () => {
    const mockData = {2004: 0.24, 2014: 0.278};
    const mockName = 'Colorado';
    const mockFunction = jest.fn();
    const wrapper = shallow(<Card 
                              id={mockName}
                              selectCard={mockFunction}
                              districtName={mockName}
                              data={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a li for each data set', () => {
    const mockData = {2004: 0.24, 2014: 0.278};
    const mockName = 'Colorado';
    const mockFunction = jest.fn();
    const wrapper = shallow(<Card 
                              id={mockName}
                              selectCard={mockFunction}
                              districtName={mockName}
                              data={mockData} />);
    
    expect(wrapper.find('li').length).toEqual(2);
  });
});