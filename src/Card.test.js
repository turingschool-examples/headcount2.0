import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  let wrapper;
  let expectedId;

  it('should match the snapshot with all data passed in correctly', () => { 
    const mockData = {location: 'Colorado', stats: [{year: 'data'}]}
    wrapper = shallow(<Card key={expectedId} district={mockData} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders all the data points', () => {
    const mockData = {location: 'denver', stats: [{2007: 0}, {2008: 1}]}
    wrapper = shallow(<Card key={expectedId} district={mockData} />)
    expect(wrapper.find('.year-data').length).toEqual(2)
    expect(wrapper.find('.card').length).toEqual(1)
  })
})

