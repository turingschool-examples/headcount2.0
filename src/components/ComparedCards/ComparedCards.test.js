/* eslint-disable */
import React from 'react';
import ComparedCards from './ComparedCards';
import { shallow } from 'enzyme';

describe('ComparedCards', () => {

  it('snapshot test', () => {
    const mockData = [{data: {2004: .523, 2005: .321}, location: 'COLORADO'}, {data: {2004: .283, 2005: .432}, location: 'ACADEMY 20'}];
    const mockFunction = jest.fn();
    const wrapper = shallow(<ComparedCards 
                              selectedCards={mockData}
                              makeComparison={mockFunction}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render two card components if there is two cards in the data', () => {
    const mockData = [{data: {2004: .523, 2005: .321}, location: 'COLORADO'}, {data: {2004: .283, 2005: .432}, location: 'ACADEMY 20'}];
    const mockFunction = jest.fn();

    const wrapper = shallow(<ComparedCards 
                              selectedCards={mockData}
                              makeComparison={mockFunction}/>);
    expect(wrapper.find('Card').length).toEqual(2);
  });

});