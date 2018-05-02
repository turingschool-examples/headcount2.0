import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

describe('Card', () => {

it('renders without crashing', () => {
  const mockTitleProp = 'DISTRICT'
  const mockDataProp = [{"2009": 0.986}]
  shallow(<Card title={mockTitleProp} listOfData={mockDataProp}/>);
})

it('should render correct amount of listItems based on props passed', () => {
  const mockTitleProp = 'DISTRICT'
  const mockDataProp = [{"2009": 0.986}]
  const card = shallow(<Card title={mockTitleProp} listOfData={mockDataProp}/>);
  expect(card.find('li').length).toEqual(1);
});
  
})