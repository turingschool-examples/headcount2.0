import React from 'react';
import{ shallow, mount } from 'enzyme';

import { CardData } from '../src/CardData';

describe('CardData', () => {

  it('has a school-data class field', () => {
    const wrapper = shallow(<CardData data={{'': {data: {}}}} schoolKey={''}/>)

    expect(wrapper.find('.school-data')).toHaveLength(1);
  })

  it('renders the number of data that is passed to it', () => {
    const data = {2004: 0.302, 2005: 0.267, 2006: 0.354}
    const wrapper = shallow(<CardData data={{'': {data: data}}} schoolKey={''}/>)

    expect(wrapper.find('.under')).toHaveLength(3);
  })

  it('renders the number of data that is passed to it', () => {
    const data = {2004: 0.502, 2005: 0.667, 2006: 0.754}
    const wrapper = shallow(<CardData data={{'': {data: data}}} schoolKey={''}/>)

    expect(wrapper.find('.over')).toHaveLength(3);
  })
})
