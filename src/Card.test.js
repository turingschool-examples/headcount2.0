import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('matches the snapshot', () => {
  const wrapper = shallow(<Card
    key={'COLORADO'}
    schoolName={'COLORADO'}
    schoolInfo={{'COLORADO': {2004: 0.5}}}
  />);

  expect(wrapper).toMatchSnapshot();
});

it.skip('gives different classes based on data number', () => {
  const wrapper = shallow(<Card
    key={'COLORADO'}
    schoolName={'COLORADO'}
    schoolInfo={{'COLORADO': {2004: 0.25, 2007: 0.7, 2009: 0.5}}}
  />);
  
  expect(wrapper.find('.data-line').hasClass('greater')).toEqual(true);
  
});
