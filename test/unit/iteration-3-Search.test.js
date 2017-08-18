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
    const mockFn = jest.fn()
    wrapper = mount(<Search findSchool={mockFn} />)
    const searchInput = wrapper.find('.search-bar');
    wrapper.instance().findAllMatches = mockFn

    expect(mockFn).toHaveBeenCalledTimes(0);

    wrapper.update();

    searchInput.simulate('change', { target: { value: 'COLORADO'} });

    expect(wrapper.instance().findAllMatches).toHaveBeenCalledTimes(1);
  });

})
