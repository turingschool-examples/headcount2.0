import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe('Card', ()=>{
  let wrapper; 

  const mockData = {
    location: 'ADAMS COUNTY 14',
      stats: {
        2004: 0.228, 
        2005: 0.3, 
        2006: 0.293, 
        2007: 0.306, 
        2008: 0.673,
        2009: 1,
        2010: 1,
        2011: 1,
        2012: 1,
        2013: 0.998,
        2014: 1
      }
  }

  const mockProcessSelection = () => {

  } 

  beforeEach(()=>{
    wrapper = shallow(<Card data={mockData} processSelection={mockProcessSelection}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({classLabel: 'card'})
  });

  it('should update state when selectCard is called', () => {
    wrapper.instance().selectCard();
    expect(wrapper.state()).toEqual({classLabel: 'card selected'});
  });

  it('should update state back when selectCard is called twice', () => {
    wrapper.instance().selectCard();
    wrapper.instance().selectCard();
    expect(wrapper.state()).toEqual({classLabel: 'card'});
  });

  it('should call selectCard() on click', () => {
    wrapper.find('.card').simulate('click')

    expect(wrapper.state()).toEqual({classLabel: 'card selected'})

  })

});