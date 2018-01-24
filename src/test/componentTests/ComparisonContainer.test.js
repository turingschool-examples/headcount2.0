import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonContainer from '../../components/ComparisonContainer';
import { shallow } from 'enzyme';

it('should match the snapshot', () => {
  const renderedComponent = shallow(<ComparisonContainer/>)
  expect(renderedComponent).toMatchSnapshot()
})