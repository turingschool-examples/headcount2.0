import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Score from '../components/Score';

describe('Score', ()=>{
  let wrapper; 

  const mockData = {year: '2004', data: 0.228}
  const mockDataHigh = {year: '2005', data: 0.9}
        
beforeEach(()=>{
    wrapper = shallow(<Score 
      year={mockData.year}
      data={mockData.data}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

  it('should manipulate icon and alt based on lower values in props', () => {
    expect(wrapper.props().children.props.children[0].props.src).toEqual('./drop-down-arrow.svg')
    expect(wrapper.props().children.props.children[0].props.alt).toEqual('down')
  })

  it('should manipulate icon and alt based on higher values in props')
    wrapper = shallow(<Score 
      year={mockDataHigh.year} 
      data={mockDataHigh.data} 
    />)
    expect(wrapper.props().children.props.children[0].props.src).toEqual('./drop-up-arrow.svg')
    expect(wrapper.props().children.props.children[0].props.alt).toEqual('up')
});