import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Header', () => {
  let wrapper;
  let findAllMatches;

  beforeEach(() => {
    findAllMatches = jest.fn()
    wrapper = shallow(<Header findAllMatches={findAllMatches}/>)
  })

  it('should have a heading and a Search component', () => {
    expect(wrapper).toMatchSnapshot();
  })
})