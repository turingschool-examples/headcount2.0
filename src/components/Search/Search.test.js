import React from 'react'
import { shallow } from 'enzyme'
import Search from './index'

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should have a search input and a button', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should search for matching districts onChange and onSubmit', () => {

  })
})