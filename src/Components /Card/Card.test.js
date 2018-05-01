import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<Card />);
});