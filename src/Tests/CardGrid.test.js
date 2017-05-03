/* eslint-disable */
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
    ReactDOM.render(<CardGrid schools = {schoolsData} />, div);
  })

  it('should render 181 school districts', () => {
    const wrapper = shallow(<CardGrid schools = {schoolsData}/>)
    const found = wrapper.find("Card")

    expect(found.length).toEqual(181)
  })

  it('should render 2 school districts when searching colo', () => {
    let mockFn = jest.fn()
    const wrapper = mount(<CardGrid schools = {schoolsData} handleSearch={mockFn} searched='colo'/>)
    const found = wrapper.find("Card")

    expect(found.length).toEqual(2)
  })

})
