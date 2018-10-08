import React from 'react'
import { shallow } from 'enzyme'
import Comparator from './index'

describe('Comparator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Comparator />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})