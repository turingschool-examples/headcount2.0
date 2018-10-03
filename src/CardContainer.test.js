import React from 'react';
import { shallow, mount } from 'enzyme';

import CardContainer from './CardContainer.js'
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

describe('CardContainer', () => {
  const repository = new DistrictRepository(kinderData)
  const data = repository.findAllMatches()

  it('should have a class of card-container', () => {
    // Setup && Execution
    const wrapper = shallow(<CardContainer districts={data} />)
    expect(wrapper.exists('.card-container')).toBe(true)
  })

it('should render cards for all school districts passed in as props', () => {
  const wrapper = mount(<CardContainer districts={data} />)
  // console.log(wrapper.debug());

  expect(wrapper.find('.card')).toHaveLength(181);


//PSUEDOCODE- CHECK COMPONENT AND ASK: IT SHOULD DO THIS 
  })
})


//USE ENZYME TO RE-CREATE COMPONENTS WITH SHALLOW/MOUNT AND USE JEST ASSERTION LIBRARY FOR TESTS