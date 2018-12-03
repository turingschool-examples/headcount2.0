import React from 'react';
import { shallow } from 'enzyme';
import CompareContainer from './CompareContainer.js';

describe('CompareContainer', () => {

  it('should match the snapshot with no selected cards', () => {
    const wrapper = shallow(<CompareContainer compareMessage="this is only a test"
                                              districtsToCompare={[]}
                                              addDistrictToCompare={jest.fn()}
                                              districtAverages={{}}
                                              resetComparison={jest.fn} />);

    expect(wrapper).toMatchSnapshot();
  })
})