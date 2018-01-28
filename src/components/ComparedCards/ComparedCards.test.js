import React from 'react';
import ReactDOM from 'react-dom';
import ComparedCards from './ComparedCards';
import { shallow } from 'enzyme';

describe('ComparedCards', () => {

  it('snapshot test', () => {
    const mockData = [{data: {2004: .523, 2005: .321}, location: 'COLORADO'}, {data: {2004: .283, 2005: .432}, location: 'ACADEMY 20'}]
    const wrapper = shallow(<ComparedCards 
                              selectedCards={}/>)
    expect(wrapper).toMatchSnapshot()
  })

})