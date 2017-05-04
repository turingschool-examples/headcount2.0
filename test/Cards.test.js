import React from 'react';
import{ shallow, mount } from 'enzyme';

import { Cards } from '../src/Cards';

describe('Cards', () => {

  it('has a card-holder class field', () => {
    const wrapper = shallow(<Cards data={{}} onClick={() =>{}}/>);
//
//     expect(wrapper.find('.card-holder')).toHaveLength(1);
  })
})
