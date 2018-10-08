import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from './index'
import Card from '../Card'

describe('CardContainer', () => {
  let wrapper;
  let districts;

  beforeEach(() => {
    districts = { 'COLORADO': {}, 'ALAMOSA': {} }
    wrapper = shallow(<CardContainer districts={districts} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have all the cards', () => {
    expect(wrapper.find(Card).length).toEqual(2)
  })
})