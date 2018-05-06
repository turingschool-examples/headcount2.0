import React from 'react';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import CompareCards from '../components/CompareCards';
import ComparisonCard from '../components/ComparisonCard';
import Card from '../components/Card';
import { shallow } from 'enzyme';

describe('Compare Cards', () => {
  let wrapper;
  const districts = new DistrictRepository(kinderData);
  const mockSelectedCards = [ 
    { 
      location: 'COLORADO', 
      stats: {
        "2004": 0.24,
        "2005": 0.278,
        "2006": 0.337,
        "2007": 0.395,
        "2008": 0.536,
        "2009": 0.598,
        "2010": 0.64,
        "2011": 0.672,
        "2012": 0.695,
        "2013": 0.703,
        "2014": 0.741,
      }, 
      selected: true 
    },
    { 
      location: 'ACADEMY 20', 
      stats: {
        "2004": 0.302,
        "2005": 0.267,
        "2006": 0.354,
        "2007": 0.392,
        "2008": 0.385,
        "2009": 0.39,
        "2010": 0.436,
        "2011": 0.489,
        "2012": 0.479,
        "2013": 0.488,
        "2014": 0.49,
      }, 
      selected: true 
    }];


  beforeEach(() => {
    wrapper = shallow(<CompareCards selectedCards={mockSelectedCards} setSelectedCard={jest.fn()} districts={districts}/>);
  });
  
  it('should match the snapshot', () => {    
    expect(wrapper).toMatchSnapshot();
  });

  it('should render selected cards and comparison card', () => {
    expect(wrapper.find(ComparisonCard).length).toEqual(1);
    expect(wrapper.find(Card).length).toEqual(2);
  });  
});
