import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Info from '../components/Info';


describe('Info', ()=>{
  let wrapper; 

  const mockClass = 'hidden-modal info-modal'

  const mockUntoggleModal = () => {

  }

  beforeEach(()=>{
    wrapper = shallow(<Info 
      modalClass={mockClass}
      untoggleModal={mockUntoggleModal}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  it('should call untoggleModal on button click', () => {
    wrapper.find('.close-icon').simulate('click');
  })

});