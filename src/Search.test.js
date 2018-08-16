import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from './Search'

describe('Search', () => {
  it('matches the SnapShot', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render with all of the correct components', () => { 
    const mockFunction = jest.fn()
    const wrapper = shallow(<Search updateCards={mockFunction}/>)

    expect(wrapper.find(Search).prop('updateCards')).toEqual(wrapper.instance().updateIdeas)
  })
})