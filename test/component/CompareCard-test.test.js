import React from 'react';
import ReactDOM from 'react-dom';
import CompareCard from '../../src/CompareCard';
import { shallow, mount } from 'enzyme';

it('should mount', () => {
  const mockfn = jest.fn();
  const wrapper = shallow(<CompareCard compareAverage={mockfn}/>);
  expect(wrapper.find('.compare-card').length).toEqual(1);
});

it('should display some text', () => {
  const mockfn = jest.fn();
  const wrapper = shallow(<CompareCard compareAverage={mockfn}/>);
  expect(wrapper.find('h1').first().text()).toEqual('Location 1:');
})
