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

  it('should render 191 school districts', () => {
    const wrapper = shallow(<CardGrid schools = {schoolsData.data}/>)
    console.log(wrapper.debug())
  })


})
