import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('snapshot test', () => {
    const mockData = {2004: 0.24, 2005: 0.278};
    const mockName = 'Colorado';
    const wrapper = shallow(<Card 
                              districtName={mockName}
                              data={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a li for each data set', () => {
    const mockData = {2004: 0.24, 2005: 0.278};
    const mockName = 'Colorado';
    const wrapper = shallow(<Card 
                              districtName={mockName}
                              data={mockData} />);
    expect(wrapper.find('li').length).toEqual(2);
  });
});