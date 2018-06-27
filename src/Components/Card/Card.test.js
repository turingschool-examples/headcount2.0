import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'

describe.skip('Card', () => {

  let wrapper;
  let mockLocation = 'Denver'
  let mockStats = {}
  let mockSelected = true
  beforeEach(() => {
    wrapper = shallow(<Card
                      location={mockLocation}
                      stats={mockStats}
                      selected={mockSelected}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})