import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../components/Card';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Card/>)
  expect(renderedComponent).toMatchSnapshot()
})