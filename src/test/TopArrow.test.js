import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TopArrow from '../components/TopArrow';


describe('TopArrow', ()=>{
  let wrapper; 

  beforeEach(()=>{
    wrapper = shallow(<TopArrow />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

});