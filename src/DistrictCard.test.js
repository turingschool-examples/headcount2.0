import React from 'react';
import { shallow } from 'enzyme';
import { DistrictCard } from './DistrictCard.js'

describe('DistrictCard', () => {

  it('should match the snapshot', () => {
    const mockProp = {
                      location: 'alabama',
                      stats: {2014: 0}
    }
    const wrapper = shallow(<DistrictCard location={mockProp.location} stats={mockProp.stats}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a different class name for stats > .5', () => {
    const mockProp = {
                      location: 'alabama',
                      stats: {2014: .6}
    }   
    const wrapper = shallow(<DistrictCard location={mockProp.location} stats={mockProp.stats}/>)
    expect(wrapper.find('li').hasClass('statGreater'))
  })

  it('should have a different class name for stats < .5', () => {
    const mockProp = {
                      location: 'alabama',
                      stats: {2014: .3}
    }   
    const wrapper = shallow(<DistrictCard location={mockProp.location} stats={mockProp.stats}/>)
    expect(wrapper.find('li').hasClass('statLesser'))
  })

})