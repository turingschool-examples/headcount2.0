import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from './Search'

describe('Search', () => {
  it('matches the SnapShot', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke updateCards on change', () => { 
    const mockFunction = jest.fn()
    const event = {target:{name: "input", value: "colorado"}}
    const wrapper = shallow(<Search updateCards={mockFunction}/>)

    wrapper.find('input').simulate('change', event)
    expect(mockFunction).toHaveBeenCalled();
  })
})