import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer.js';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer  districtData={[]}
                                      compareMessage=""
                                      districtsToCompare={[]}
                                      addDistrictToCompare={jest.fn()}
                                      districtAverages={{}}
                                      resetComparison={jest.fn()} />);
  })

  it('should match the snapshot with no cards passed down', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot with cards passed down', () => {
    expect(wrapper).toMatchSnapshot();
  })
})