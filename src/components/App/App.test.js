import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('has initial state with the data, an empty array of selected cards, and empty average object', () => {
  const wrapper = shallow(<App />)
  const mockData = {COLORADO: {data:{2004: 0.154, 2005: 0.555}, location: 'COLORADO'}}
  wrapper.setState({districtData: mockData})
  expect(wrapper.state().districtData).toEqual(mockData);
  expect(wrapper.state().selectedCards).toEqual([]);
  expect(wrapper.state().averageObject).toEqual({});
})

it("should show a card if its state districtData has data in it", () => {
  const wrapper = shallow(<App />)
  const mockData = {COLORADO: {data:{2004: 0.154, 2005: 0.555}, location: 'COLORADO'}}
  wrapper.setState({districtData: mockData})
  console.log(wrapper.debug());
  //uexpect(wrapper)
})

it.skip("should change the display there is text in the input", () => {
  const wrapper = mount(<App />)
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}}
  wrapper.setState({districtData: mockData})
  console.log(wrapper.state());
  console.log(wrapper.debug());

  wrapper.find('input').first().simulate('change', {target:{value: "CO"}})

  console.log('-----------------------------------------------');
  console.log(wrapper.debug());
})

it('should have ONE card in the state selected cards array when a card is selected', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}}
  wrapper.setState({districtData: mockData});
  expect(wrapper.state().selectedCards).toEqual([]);
  wrapper.find('article').first().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(1)
})

it.only('should have TWO cards in the selectCardArray and now a comparison object', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}}
  
  wrapper.setState({districtData: mockData});
  wrapper.find('article').first().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(1);
  wrapper.find('article').last().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(2);
  console.log(wrapper.state().averageObject)
})

it('should have a comparison object within it when there are two selected cards in the array', () => {
  const wrapper = shallow(<App />);
  //check compareObject in state is empty
  //add two cards to selected arr
  //check compare object has object in it
})

