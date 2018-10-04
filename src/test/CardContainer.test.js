import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from '../components/CardContainer'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer />)
  })

  it('should have cards', () => {
    expect(wrapper).toMatchSnapshot()
  })
})