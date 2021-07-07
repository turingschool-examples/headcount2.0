import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme';
import App from './App';
import kinderData from './testData.js';

describe.skip('CardContainer', () => {

it('should match the snapshot', () => {
  const wrapper = shallow(<CardContainer />);
  expect(wrapper).toMatchSnapshot()
  });

});