import React from 'react';
import { shallow, mount} from 'enzyme';
import CardContainer from '../../src/components/CardContainer';
import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('CardContainer Test', () => {
  it('has a cardContainer class ', () => {
    const district = new DistrictRepository(kinderData);
    const data = district.data;
    const wrapper = shallow(<CardContainer handleData={{data}} handleCompare={() => {}} handleCompareData={[]}/>)

    expect(wrapper.find('.cardsContainer').length).toEqual(1);
  })

  it.skip('renders 181 elements with class name card ', () => {
    const district = new DistrictRepository(kinderData);
    const data = district.data;
    const wrapper = mount(<CardContainer handleData={{data}} handleCompare={() => {}} handleCompareData={[]}/>)
    expect(wrapper.find('.card').length).toEqual(1);
  })
})
