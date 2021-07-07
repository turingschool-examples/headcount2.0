import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';
import App from './App';
import kinderData from './testData.js';

describe('SearchForm', () => {

it('should match the snapshot', () => {
  const wrapper = shallow(<SearchForm />);
  expect(wrapper).toMatchSnapshot()
  });

it('should be able to search for a particular district title', () => {
  const wrapper = shallow(<SearchForm />)
  expect().toEqual()
})

});