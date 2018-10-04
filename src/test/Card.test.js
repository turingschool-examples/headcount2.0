import React from 'react'
import { shallow } from 'enzyme'
import Card from '../Card/Card'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})