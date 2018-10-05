import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card';

it('matches the snapshot', () => {
  const wrapper = shallow(<Card
                            key={'COLORADO'}
                            schoolName={'COLORADO'}
                            schoolInfo={{'COLORADO': {2004: 0.5}}}
                            />)

  expect(wrapper).toMatchSnapshot()
});

