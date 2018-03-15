import React from 'react';
import {shallow} from 'enzyme';
import ComparisonCard from './ComparisonCard.js';


describe('ComparisonCard', () => {
  let wrapper;
  const comparedAverage = { 
    COLORADO:0.34, 
    'COLORADO SPRINGS': 0.45, 
    compared:0.75 
  };

  beforeEach(() => {
    wrapper = shallow(
      <ComparisonCard comparedAverage={comparedAverage}/>);
  });

  it('Should match the snapshot', ()=> {
    expect(wrapper).toMatchSnapshot();
  });
});