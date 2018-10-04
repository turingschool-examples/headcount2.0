import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

it('matches the snapshot', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot()
});
