import React from 'react';
import Data from '../../data/kindergartners_in_full_day_program.js';
import CompareCardContainer from '../../CompareCardContainer.js';
import CompareCard from '../../CompareCard.js';
import {shallow, mount} from 'enzyme';

describe('CompareCardContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const card1 = {
      location: "ADAMS COUNTY 14",
      selected: false,
      stats:
      {2004: 0.228,
      2005: 0.3,
      2006: 0.293,
      2007: 0.306,
      2008: 0.673,
      2009: 1,
      2010: 1,
      2011: 1,
      2012: 1,
      2013: 0.998,
      2014: 1
      }
    }

    const card2 = {
      location: "ADAMS COUNTY 14",
      selected: false,
      stats:
      {2004: 0.228,
      2005: 0.3,
      2006: 0.293,
      2007: 0.306,
      2008: 0.673,
      2009: 1,
      2010: 1,
      2011: 1,
      2012: 1,
      2013: 0.998,
      2014: 1
      }
    }

    const state = {
      compareCard1: card1,
      compareCard2: card2
    }

    const wrapper = shallow(
      <CompareCardContainer appState={state} />
    );
    
    expect(wrapper).toMatchSnapshot()
  })


})