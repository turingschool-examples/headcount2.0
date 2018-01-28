/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {

  it('snapshot test', () => {
    const mockData = {COLORADO: {data: {2004: .523, 2005: .321}, location: 'COLORADO'}, 'ACADEMY 20': {data: {2004: .283, 2005: .432}, location: 'ACADEMY 20'}}
    const mockCompare = [{data:{2004: .523, 2005: .321}, location: 'COLORADO'}, {data: {2004: .283, 2005: .432}, location: 'ACADEMY 20'}]
    const wrapper = shallow(<CardContainer 
                              districtData={mockData}
                              comparedCards={mockCompare}
                              />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a card component for each data set', () => {
    const mockData = {COLORADO: {data: {2004: .523, 2005: .321}, location: 'COLORADO'}, 'ACADEMY 20': {data: {2004: .283, 2005: .432}, location: 'ACADEMY 20'}}
    const mockCompare = [{data:{2004: .523, 2005: .321}, location: 'COLORADO'}, {data: {2004: .283, 2005: .432}, location: 'ACADEMY 20'}]
    const wrapper = shallow(<CardContainer 
                              districtData={mockData}
                              comparedCards={mockCompare}
                              />)
    expect(wrapper.find('Card').length).toEqual(2)
  })

})
