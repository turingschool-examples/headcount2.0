import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('matches the snapshot', () => {

    let wrapper = shallow(<Card 
            key={Date.now()} 
            location={'string'}
            stats={{1909: 0.107, 3999: 5.999}} />);
    expect(wrapper).toMatchSnapshot()
  });

})