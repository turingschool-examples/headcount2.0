import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from '../components/CardContainer';
import DistrictRepository from '../helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';




describe('CardContainer', ()=>{
  let wrapper; 



  const mockProcessSelection = jest.fn()

  beforeEach(()=>{
    wrapper = shallow(<CardContainer 
      data={new DistrictRepository(kinderData)} 
      processSelection={mockProcessSelection}
      selection={[]}
      filterString={'colo'}

    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render filtered content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  it('should render the entire dataset if there is filterString in props is a blank string', () => {
    wrapper = shallow(<CardContainer 
      data={new DistrictRepository(kinderData)} 
      processSelection={mockProcessSelection}
      selection={[]}
      filterString={''}
    />);
    
    expect(wrapper).toMatchSnapshot();    
  });

});