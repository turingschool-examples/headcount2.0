import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonCard from './ComparisonCard';
import { shallow } from 'enzyme';

describe('ComparisonCard', () => {

  it('snapshot test', () => {
    const mockObject = {'ADAMS COUNTY 14': 0.709, 'ACADEMY 20': 0.407, compared: 1.742}
    const wrapper = shallow(<ComparisonCard 
                              comparedObject={mockObject}/>)
    
    expect(wrapper).toMatchSnapshot()
  })

})