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
    const mockFn = jest.fn()
    const wrapper = shallow(<Search updateCards={mockFn}/>)
    const input = wrapper.find('input');
    input.simulate('change', event);

    expect(mockFn).toHaveBeenCalled();

  })

})