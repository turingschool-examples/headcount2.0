import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';
import { shallow, mount } from 'enzyme';
import React from 'react';
import CompareCardContainer from '../../CompareCardContainer.js';


describe ('ComparedCardContainer', () => {
    it('should match the snapshot with all data passed in correctly', () => {
        const wrapper = shallow (
            <CompareCardContainer  />
        )
            expect(wrapper).toMatchSnapshot();
    })
});