import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('CARD', () => {
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

  it('Should have class of less-than if data is < .5', () => {
    const wrapper = shallow(
      <Card
        location='COLORADO'
        stats={{ 2004: .499 }}
        key={1}
      />
    );

    expect(wrapper.find('div').is('.less-than')).toEqual(true)
    expect(wrapper.find('div').is('.stat')).toEqual(true)
  })

  it('Should not have class of less-than if data is >= .5', () => {
    const wrapper = shallow(
      <Card
        location='COLORADO'
        stats={{ 2004: .5 }}
        key={1}
      />
    );

    expect(wrapper.find('div').is('.less-than')).toEqual(false)
    expect(wrapper.find('div').is('.stat')).toEqual(true)
  })
})