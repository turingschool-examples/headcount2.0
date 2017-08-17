import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../src/Search';
import { mount, shallow } from 'enzyme';

describe('Search', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<Search />)
  })

  it('should exist', ()=> {
    expect(wrapper).toBeDefined()
  })

  it('should fire a function on change', () => {
    const searchInput = wrapper.find('.search-bar');
    const mockFn = jest.fn()

    wrapper = mount(<Search findSchool={mockFn} />);
    wrapper.instance().findSchool = mockFn;

    expect(mockFn).toHaveBeenCalledTimes(0);

    searchInput.simulate('change', { target: { value: 'COLORADO'} });
    console.log('mock', mockFn.mock.calls)
    expect(wrapper.instance().props().findSchool).toHaveBeenCalledTimes(1);
  })
})
