import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardsContainer from '../../../src/CardsContainer';


describe('CardsContainer', () => {
  it('should render one-eight-one cards', () => {
    const wrapper = shallow(<CardsContainer schoolData={[]} />);    
    
    expect(wrapper).toMatchSnapshot();
  })

})
