import React from 'react';
import{ shallow, mount } from 'enzyme';

import { Cards } from '../src/Cards';

describe('Cards', () => {

  it('has a card-holder class field', () => {
    const wrapper = shallow(<Cards data={{}} onClick={() =>{}}/>);
//
    expect(wrapper.find('.card-holder')).toHaveLength(1);
  })

  it('renders the number of cards that are passed to it', () => {
    const data = [{location: 'denver', data: ''}, {location: 'academy', data: ''}, {location: 'akron', data: ''}]
    const wrapper = shallow(<Cards data={data} onClick={() => {}}/>)

    expect(wrapper.find('.card')).toHaveLength(3);
  })
})
