import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparisonContainer from '../../ComparisonContainer';

describe ('ComparisonContainer', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ComparisonContainer />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  // it('should render comparison data when two cards are selected', () => {
    
  // })
})