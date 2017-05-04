import React from 'react';
import { shallow, mount} from 'enzyme';
import CardContainer from '../../src/components/CardContainer';
import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer Test', () => {
  it.skip('should render ', () => {
    const district = new DistrictRepository(kinderData)
    const wrapper = shallow(<CardContainer  handleData={district.data}/>)

    expect(wrapper.find('.cardContainer').length).toEqual(181);
  })


})
