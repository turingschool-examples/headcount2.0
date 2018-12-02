import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer.js';

describe('CardContainer', () => {

  it('should match the snapshot with no cards passed down', () => {
    let wrapper = shallow(<CardContainer districtData={[]} />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot with cards passed down', () => {
    let wrapper = shallow(<CardContainer districtData={[]} />);

    expect(wrapper).toMatchSnapshot();
  })
})