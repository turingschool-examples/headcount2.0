import React from 'react'
import { shallow, mount } from 'enzyme'

import Card from './Card'

describe('Card', () => {

  it('should match the snapshot with all data passed in correctly', () => { 
    let expectedId;
    const mockData = {location: 'Colorado', stats: [{year: 'data'}]}
    const wrapper = shallow(<Card key={expectedId} districtData={mockData} />)
    expect(wrapper).toMatchSnapshot()
  })
})

