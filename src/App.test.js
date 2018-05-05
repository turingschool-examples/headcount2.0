import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DistrictRepository from './helper';
import {shallow, mount} from 'enzyme';
import kinderData from './data/kindergartners_in_full_day_program';

describe('App', () => {

  it('should match the snapshot', () => {
    const districts = new DistrictRepository(kinderData);
    const wrapper = shallow(<App districts={ districts } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state', ()=> {
    const districts = new DistrictRepository(kinderData);
    const wrapper = shallow(<App districts={ districts } />);

    expect(wrapper.state().schoolStats).toBe(districts.stats);
    expect(wrapper.state().districts).toBe(districts);
    expect(wrapper.state().selectedCards).toEqual([]);
  });

});

