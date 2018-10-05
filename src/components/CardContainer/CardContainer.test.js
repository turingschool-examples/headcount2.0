import React from 'react'
import { shallow, mount } from 'enzyme'
import CardContainer from './index'

describe('CardContainer', () => {
  let wrapper;
  let districts;

  beforeEach(() => {
    districts = {}
    wrapper = mount(<CardContainer districts={districts} />)
  })

  it('should have cards', () => {
    expect(wrapper).toMatchSnapshot()
  })
})