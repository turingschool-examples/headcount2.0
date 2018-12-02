import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should have an initial state of districtData, which is an empty array', () => {

  })

  it('should set state with district data on page load', () => {

  })

  describe('handleChange', () => {
    it('changes the state of searchInput based on the value of the event target', () => {
  
    })
  })

  describe('search', () => {
    it('should create a new instance of DistrictRepository when called', () => {

    })

    it('should call findAllMatches on the new instance of DistrictRepositories when called', () => {

    })
    
    it('should update the state of districtData based on the search input', () => {
      
    })
  })
})
