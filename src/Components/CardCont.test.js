import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('CARDCONT', () => {
  it('Should match snapshot', () => {
    const wrapper = shallow(
      <Card 
        location='COLORADO'
        stats={{key: 1}}
        key={1}
      />
    );

    expect(wrapper.html()).toMatchSnapshot();
  })
})