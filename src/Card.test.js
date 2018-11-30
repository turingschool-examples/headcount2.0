import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Card 
            key={Date.now()} 
            {...district} />);
    expect(wrapper).toMatchSnapshot()
  });

})