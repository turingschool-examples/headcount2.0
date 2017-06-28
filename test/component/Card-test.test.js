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
  console.log(wrapper.debug());
  expect(wrapper.find('.card').length).toEqual(1);
})
