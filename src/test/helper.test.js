import DistrictRepository from '../../src/helper.js';
import kinderData from './../data/kindergartners_in_full_day_program.js';
import {shallow, mount} from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

describe('helper', () => {
  const districts = new DistrictRepository(kinderData);

  it('find a district by name', () => {
    const expected =  {
      "location": "COLORADO", 
      "selected": false, 
      "stats": {
        "2004": 0.24, 
        "2005": 0.278, 
        "2006": 0.337, 
        "2007": 0.395, 
        "2008": 0.536, 
        "2009": 0.598, 
        "2010": 0.64, 
        "2011": 0.672, 
        "2012": 0.695, 
        "2013": 0.703, 
        "2014": 0.741}
    };

    expect(districts.findByName('colorado')).toEqual(expected);
  });

  it('returns all matches that match the argument passed in', () => {

    expect(districts.findAllMatches('colorado').length).toEqual(2);
  });

  it('returns the average of a districts stats', () => {

    expect(districts.findAverage('BYERS 32J')).toEqual(0.94);
  });
  
});