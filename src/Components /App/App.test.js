import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<App />);
});