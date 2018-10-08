import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'

describe('Card', () => {
  let wrapper;
  let location;
  let stats;

  beforeEach(() => {
    location = 'COLORADO'
    stats = {2018: 1, 2017: 0.5, 2016: 0}
    wrapper = shallow(<Card location={location} stats={stats}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it ('should not make cards if there are no stats', () => {
    stats = undefined
    wrapper = shallow(<Card location={location} stats={stats} />)

    expect(wrapper.find('li').length).toEqual(0)
  })
})