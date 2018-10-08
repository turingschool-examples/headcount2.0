import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import { shallow } from 'enzyme';
import App from './App';

describe('DataCard', () => {

it('should match the snapshot', () => {
  const wrapper = shallow(<SearchForm />);
  expect(wrapper).toMatchSnapshot()
  });

});