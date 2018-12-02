import React from 'react';
import { shallow, mount } from 'enzyme';

import CardContainer from './CardContainer.js'
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

describe('CardContainer', () => {
  const repository = new DistrictRepository(kinderData)
  const data = repository.findAllMatches()

  it('should match snapshot', () => {
    const wrapper = shallow(<CardContainer districts={data} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a class of card-container', () => {
    const wrapper = shallow(<CardContainer districts={data} />)
    expect(wrapper.exists('.card-container')).toBe(true)
  })

it('should render cards for all school districts passed in as props', () => {
  const wrapper = mount(<CardContainer districts={data} />)
 

  expect(wrapper.find('.card')).toHaveLength(181);
  })
})

