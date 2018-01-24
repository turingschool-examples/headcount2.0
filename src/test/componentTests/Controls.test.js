import React from 'react';
import ReactDOM from 'react-dom';
import Controls from '../../components/Controls';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<Controls/>)
  expect(renderedComponent).toMatchSnapshot()
})