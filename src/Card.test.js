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

  it.skip('assigns a classNames of listedStats and above to all stats that are above 0.5, and listedStats below to all stats less than 0.5', () => {


  })

  

})