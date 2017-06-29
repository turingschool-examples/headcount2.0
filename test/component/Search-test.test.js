import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../../src/Search';
import { shallow, mount } from 'enzyme';

it('Should mount', () => {
  const wrapper = shallow(<Search/>)
  expect(wrapper.find('.search-input').length).toEqual(1);
});

it('should contain an input field', () => {
  const wrapper = shallow(<Search/>)
  expect(wrapper.find('input[type="text"]').length).toEqual(1);
})

it('should run a function when a keydown event is fired', () => {
  const mockfn = jest.fn();
  const component = mount(<Search filterSearch={mockfn}/>);
  const input = component.find('input[type="text"]');

  expect(mockfn).toHaveBeenCalledTimes(0);

  input.simulate('keyDown', {});

  expect(mockfn).toHaveBeenCalledTimes(1);
});
