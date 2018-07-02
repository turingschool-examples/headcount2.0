import React from 'react';
import CompareCard from './CompareCard';
import { shallow } from 'enzyme';
import DistrictRepository from '../../helper';
import Kiddata from '../../data/kindergartners_in_full_day_program';

describe('CompareCard', () => {

  let wrapper;
  const mockDistrictMethods = new DistrictRepository(Kiddata);
  const mockSelectedCards = [{
    location: "ACADEMY 20",
    selected: true,
    stats: {2004: 0.302, 
      2005: 0.267,
      2006: 0.354,
      2007: 0.392,
      2008: 0.385,
      2009: 0.39,
      2010: 0.436,
      2011: 0.489,
      2012: 0.479,
      2013: 0.488,
      2014: 0.49
    }
  },
  {
    location: "ACADEMY 20",
    selected: true,
    stats: {
      2004: 0.302,
      2005: 0.267,
      2006: 0.354,
      2007: 0.392,
      2008: 0.385,
      2009: 0.39,
      2010: 0.436,
      2011: 0.489,
      2012: 0.479,
      2013: 0.488,
      2014: 0.49
    }
  }];

  beforeEach(() => {
    wrapper = shallow(<CompareCard 
      districtMethods={mockDistrictMethods}
      selectedCards={mockSelectedCards}
    />);
  });

  it('should match its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});