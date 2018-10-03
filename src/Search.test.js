import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should have a search input and a button', () => {
    expect(wrapper).toMatchSnapshot();
  })
})