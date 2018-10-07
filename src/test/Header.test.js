import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../components/Header';


describe('Header', ()=>{
  let wrapper; 

  const mockToggleModal = jest.fn();
  const mockProcessFilter = () => {

  }

  beforeEach(()=>{
    wrapper = shallow(<Header 
      toggleModal={mockToggleModal}
      processFilter={mockProcessFilter}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  it('should call toggleModal on button click', () => {
    wrapper.find('.info-btn').simulate('click')

    expect(mockToggleModal.mock.calls.length).toBe(1)
  });

});