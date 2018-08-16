import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  })

  it('Should setState with all data when updateCards is invoked', () => {
    wrapper.instance().updateCards();

    expect(wrapper.state().data.length).toEqual(181);
  })

  it('Should match the snapshot', () => {
    const wrapper = shallow(
      <App 
        
      />)
  })
})
