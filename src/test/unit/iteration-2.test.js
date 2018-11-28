import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js'
import {shallow, mount} from 'enzyme';
import React from 'react';
import Card from '../../Card.js';


describe ('Card', () => {
    const mockDistrict = {
        location: "Colorado",
        stats: {
            2004: 0.24,
            2005: 0.278,
            2006: 0.337,
            2007: 0.395,
            2008: 0.536,
            2009: 0.598,
            2010: 0.64,
            2011: 0.672,
            2012: 0.695,
            2013: 0.703,
            2014: 0.741
        }
    }

    it('should match the snapshot with all data passed in correctly', () => {
        const wrapper = shallow (
            <Card cardInfo = {mockDistrict} />
        )
            expect(wrapper).toMatchSnapshot();
    })
});