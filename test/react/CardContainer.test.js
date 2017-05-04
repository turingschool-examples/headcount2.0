import React from 'react';
import { shallow, mount} from 'enzyme';
import CardContainer from '../../src/components/CardContainer';
import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer Test', () => {
  it('has a cardContainer class ', () => {
    const district = new DistrictRepository(kinderData);
    const wrapper = shallow(<CardContainer handleData={{district}}/>)

    expect(wrapper.find('.cardsContainer').length).toEqual(1);
  })

  it('renders 1 element with class name cards ', () => {
    const district = new DistrictRepository(kinderData);
    const wrapper = shallow(<CardContainer handleData={{district}}/>)

    expect(wrapper.find('.cards').length).toEqual(1);
  })

  it.skip('renders 181 card elements ', () => {
    const district = new DistrictRepository(kinderData);
    // console.log(district);
    const expectedState = {
      district: district.data
    }

    console.log(expectedState);

    const wrapper = mount(<CardContainer handleData={{expectedState}}/>)

    expect(wrapper.find('.card').length).toEqual(181);
  })


})
