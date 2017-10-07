import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../src/Search';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import config from '../setup.js';


describe('Search Component', () => {
  let wrapper;
  let mockFunc = () => {};

  beforeEach(() => {
    wrapper = mount(<Search cardSearch={mockFunc} />);
  });

  it('updates state.input when a user types in to the search', () => {
    expect(wrapper.state('input')).toEqual('');
  });

  it('should render text input field', () => {
    const input = wrapper.find('input');

    expect(input).toBeTruthy();
    expect(wrapper.length).toEqual(1);
  });

  it('should update value of input field', () => {
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'hello'}});
    expect(wrapper.state('input')).toEqual('hello');
  })

});
