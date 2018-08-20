import React from 'react';
import { shallow } from 'enzyme';
import ComparedCard from './ComparedCard';

describe('ComparedCard', () => {
  it('should render with all the appropriate elements', () => {

    const wrapper = shallow(<ComparedCard 
      comparedObject={[]}
    />)
  })
})