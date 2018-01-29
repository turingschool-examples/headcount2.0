/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Control from './Control';

describe('Control', () => {
  let wrapper;
  const mockHandleSearch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Control
        handleSearch={ mockHandleSearch } 
        searchError={false} 
      />);
  });

  it('should match the snapshot if there is not error in the search', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if there is an error in the search', () => {
    wrapper = shallow(
      <Control
        handleSearch={()=>{}} 
        searchError={true} 
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should execute handleSearch when the input is changed', () => {
    wrapper.find('input').simulate('change', { target: {value: 'c'}});
    expect(mockHandleSearch.mock.calls.length).toBe(1);
  });
});