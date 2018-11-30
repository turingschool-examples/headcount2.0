import React from 'react';
import ComparisonContainer from './ComparisonContainer';
import { shallow } from 'enzyme';

describe('ComparisonContainer', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<ComparisonContainer />);
    expect(wrapper).toMatchSnapshot()
  });

})