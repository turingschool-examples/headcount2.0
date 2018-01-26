import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../../components/CardContainer';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<CardContainer/>)
  expect(renderedComponent).toMatchSnapshot()
})