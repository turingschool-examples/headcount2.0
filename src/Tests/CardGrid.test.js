import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import CardGrid from '../Components/CardGrid';
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Caaard Grid', () =>{
  const schoolsData = new DistrictRepository(kinderData)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardGrid />, div);
  });

  it.only('should render 181 school districts', () => {
    const wrapper = shallow(<CardGrid schools = {schoolsData}/>)
    const found = wrapper.find("Card")

    // console.log(schoolsData.findAllMatches())

    expect(found.length).toEqual(181)
  })


})
