import React from 'react'
import { shallow, mount } from 'enzyme'
import CardContainer from './CardContainer'

describe('CardContainer', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const mockStats = {stats: {location: [{year: 2007}]}}
    const wrapper = shallow(<CardContainer stats={mockStats} />)
    expect(wrapper).toMatchSnapshot()
  })
})