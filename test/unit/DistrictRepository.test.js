import React from 'react';
import ReactDOM from 'react-dom';
import DistrictRepository from '../../src/DistrictRepository';
import { mount, shallow } from 'enzyme';

describe('District Repository', () => {
  let wrapper

  beforeEach( () => {
    wrapper = shallow(<DistrictRepository />)
  })

 it.skip('should not suck', () => {
   expect()
 })
})
