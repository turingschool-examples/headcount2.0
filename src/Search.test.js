import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search.js'

describe('Search', () => {

  it('should display an input field', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<Search updateCards={mockFn}/>)
    expect(wrapper.find('input').hasClass('searchBar'))
  })

  it('should invoke updateCard onChange', () => {
    const event = {target: {value: "COLORADO"}};
    const mockFn = jest.fn(event.target.value)
    const wrapper = shallow(<Search updateCards={mockFn}/>)
    const input = wrapper.find('input');
    // const mockEvent = { target: { value: 'abc', name: 'body' } }
    input.simulate('change', event);

    expect(wrapper.props().updateCards).toHaveBeenCalled();

  })

})