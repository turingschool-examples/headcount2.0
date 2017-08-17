import React from 'react';
import ReactDOM from 'react-dom';
import DistrictRepository from '../../src/DistrictRepository';
import { mount, shallow } from 'enzyme';

describe('District Repository', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<DistrictRepository />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  // it('should fire a function on change', () => {
  //   wrapper = mount(<DistrictRepository />)
  //   const searchInput = wrapper.find('.search-bar');
  //   const mockFn = jest.fn()
  //
  //   expect(mockFn).toHaveBeenCalledTimes(0);
  //
  //   searchInput.simulate('change', { target: { value: 'COLORADO'} });
  //
  //   expect(mockFn).toHaveBeenCalledTimes(8);
  // })
})
