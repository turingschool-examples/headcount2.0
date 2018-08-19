import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

it('renders with the correct props', () => {

  expect(wrapper.find(CardContainer).prop('data')).toEqual([])
  })

 it('should populate school data in state when updateCards is called', () => {
  wrapper.instance().updateCards();

  expect(wrapper.state().data.length).toEqual(181)
 })

 it('should get the correct number of cards when the updateCards methods is called', () => {
  const mockData = [{"location": "COLORADO", "stats": {"2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0.395, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, "2012": 0.695, "2013": 0.703, "2014": 0.741}}, {"location": "COLORADO SPRINGS 11", "stats": {"2004": 0.069, "2005": 0.509, "2006": 0.638, "2007": 0.994, "2008": 0.992, "2009": 1, "2010": 0.993, "2011": 0.994, "2012": 0.993, "2013": 0.989, "2014": 0.994}}]

  wrapper.instance().updateCards('COLORADO')
  expect(wrapper.state().data.length).toEqual(2)
  expect(wrapper.state().data).toEqual(mockData)
 })
}) 
