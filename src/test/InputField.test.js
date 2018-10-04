import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InputField from '../components/InputField';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper.js'

describe('InputField', ()=>{
  let wrapper; 

  const mockProcessFilter = jest.fn();

  const mockEvent = {target: {value: 'place'}}

  beforeEach(()=>{
    wrapper = shallow(<InputField processFilter={mockProcessFilter}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });
  
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({input: ''})
  });

  it('should update state when processInput is called', () => {
    wrapper.instance().processInput('place')

    expect(wrapper.state()).toEqual({input: 'place'})
  })

  it('should call processFilter when processInput is called', () => {
    wrapper.instance().processInput('place')

    expect(mockProcessFilter.mock.calls.length).toBe(2)
  })

  it('should call processInput on text input', () => {
    wrapper.find('.text-input').simulate('change', mockEvent);
  })

});