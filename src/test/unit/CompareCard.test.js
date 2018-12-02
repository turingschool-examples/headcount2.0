import React from 'react';
import Data from '../../data/kindergartners_in_full_day_program.js';
import CompareCardContainer from '../../CompareCardContainer.js';
import CompareCard from '../../CompareCard.js';
import {shallow, mount} from 'enzyme';

describe('CompareCard', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const card1 = {
      "ACADEMY 20": 0.407, 
      "ADAMS COUNTY 14": 0.709, 
      compared: 0.574
    }

    const wrapper = shallow(
      <CompareCard cardInfo={card1} />
    );
    
    expect(wrapper).toMatchSnapshot()
  })


})