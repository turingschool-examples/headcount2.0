import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from './index'

describe('Search', () => {
  let findAllMatching;
  let wrapper;

  beforeEach(() => {
    findAllMatching = jest.fn()
    wrapper = shallow(<Search />)
  })

  it('should have a search input', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleInputChange onChange of the inputs', () => {
    wrapper = mount(<Search />)
    const spy = spyOn(wrapper.instance(), 'handleInputChange')
    wrapper.instance().forceUpdate()
    const mockEvent = { target: { value: 'something' } }

    wrapper.find('.search-input').simulate('change', mockEvent)

    expect(spy).toHaveBeenCalled()
  })

  it('updates state when handleInputChange is called', () => {
    const mockEvent = { target: { name: 'query', value: 'something' } }

    wrapper.instance().handleInputChange(mockEvent)

    expect(wrapper.state('query')).toBe('something')
  })

  it('should call handleSubmit onSubmit of the form', () => {
    wrapper = mount(<Search />)
    const spy = spyOn(wrapper.instance(), 'handleSubmit')
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().forceUpdate()

    wrapper.find('form').simulate('submit', mockEvent)

    expect(spy).toHaveBeenCalled()
  })
})