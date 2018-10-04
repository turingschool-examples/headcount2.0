import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from './Card.js'
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

describe('Card', () => {
  // const repository = new DistrictRepository(kinderData)
  // const data = repository.findAllMatches()

  it('should have a class of card', () => {
    // Setup && Execution
    const district = {school: 'Colorado', data: {2016: 0.33677}}
    const wrapper = shallow(<Card district={district} />)
    expect(wrapper.exists('.card')).toBe(true)
  })

  it('should render card data filtered by color', () => {
    const district = {school: 'Colorado', data: {2016: 0.33677}}
    const wrapper = shallow(<Card district={district} />)
    // console.log(wrapper.debug());

    //Read card data UIs and count how many LIs there are and assert that there is a correct amount
  })
})


