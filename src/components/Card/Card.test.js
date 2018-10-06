import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'

describe('Card', () => {
  let wrapper;
  let location;
  let data;

  beforeEach(() => {
    location = 'COLORADO'
    data = {2018: 1}
    wrapper = shallow(<Card location={location} data={data}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})