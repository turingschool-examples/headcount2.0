import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../src/Card';
import { shallow, mount } from 'enzyme';

const city = {
  location: 'fake place',
  data: {
    1999: .5,
    2000: 1,
    2001: .8
  }
}

it('Should mount', () => {
  const wrapper = shallow(<Card city={city}/>)
  expect(wrapper.find('.card').length).toEqual(1);
})

it('should display a loction', () => {
  const wrapper = shallow(<Card city={city}/>)
  expect(wrapper.contains(<h1>fake place</h1>)).toEqual(true);
})

it('should display all the yearly data given', () => {
  const wrapper = shallow(<Card city={city}/>)
  expect(wrapper.find('tr').length).toEqual(3)
})

it('should should give className of "red" to years with number of .5 or lower and green if above .5 ', () => {
  const wrapper = shallow(<Card city={city}/>)
  expect(wrapper.find('.red').length).toEqual(1)
  expect(wrapper.find('.green').length).toEqual(2)
})

it('Should run clickActive when clicked', () => {
  const mockFn = jest.fn();
  const wrapper = mount(<Card city={city} clickActive={mockFn}/>)
  const card = wrapper.find('.card');
  expect(mockFn).toHaveBeenCalledTimes(0);
  card.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(1);

})
