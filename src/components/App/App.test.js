/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('has initial state with the data and an empty array of selected cards', () => {
  const wrapper = shallow(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2005: 0.555}, location: 'COLORADO'}};
  
  wrapper.setState({districtData: mockData});
  expect(wrapper.state().districtData).toEqual(mockData);
  expect(wrapper.state().selectedCards).toEqual([]);
});

it("should show a card if its state districtData has data in it", () => {
  const wrapper = shallow(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2005: 0.555}, location: 'COLORADO'}};

  wrapper.setState({districtData: mockData});
  expect(wrapper).toMatchSnapshot();
});

it('should have ONE card in the state selected cards array when a card is selected', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  
  wrapper.setState({districtData: mockData});
  expect(wrapper.state().selectedCards).toEqual([]);
  wrapper.find('article').first().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(1);
});

it('should have TWO cards in the selectCardArray when two are clicked', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  
  wrapper.setState({districtData: mockData});
  wrapper.find('article').first().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(1);
  wrapper.find('article').last().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(2);
});

it('should have the compare container in the DOM within it when there are two selected cards in the array', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  const mockArray = [{ data: { '2004': 0.154, '2014': 0.555 }, location: 'COLORADO' },
    { data: { '2004': 0.222, '2014': 0.777 }, location: 'ACADEMY 20' }];
  
  wrapper.setState({districtData: mockData, selectedCards: mockArray});
  expect(wrapper.find('article.compared-cards-container').length).toEqual(1);
});

it('the handleSubmit function should set the districtData state to the searched item', () => {
  const wrapper = shallow(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  const expected = {"ACADEMY 20": {"data": {"2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, "2008": 0.385, "2009": 0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, "2013": 0.488, "2014": 0.49}, "location": "ACADEMY 20"}};
  const inst = wrapper.instance();

  wrapper.setState({districtData: mockData});
  inst.handleSubmit('academy 20');
  expect(wrapper.state().districtData).toEqual(expected);
});

it('the makeComparison function should show a comparison card when the selectedCards array length is 2', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  wrapper.setState({districtData: mockData});
  wrapper.setState({selectedCards: [{data:{2004: 0.154, 2014: 0.665}, location: 'COLORADO'}, {data:{2004: 0.134, 2014: 0.777}, location: 'ACADEMY 20'}]});
  expect(wrapper.state().selectedCards.length).toEqual(2);
  
  const inst = wrapper.instance();
  inst.handleSubmit('academy 20');
  expect(wrapper.find('article.compare-card').length).toEqual(1);
});

it('the deselectCard function should reduce the selectedCards array length by one', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({selectedCards: [{data:{2004: 0.154, 2014: 0.665}, location: 'COLORADO'}, {data:{2004: 0.134, 2014: 0.777}, location: 'ACADEMY 20'}]});
  expect(wrapper.state().selectedCards.length).toEqual(2);
  
  const inst = wrapper.instance();
  inst.deselectCard('COLORADO');

  expect(wrapper.state().selectedCards.length).toEqual(1);
  expect(wrapper.state().selectedCards).toEqual([{data:{2004: 0.134, 2014: 0.777}, location: 'ACADEMY 20'}]);
});

it('the selectCard function should add a card to the selectedCard array', () => {
  const wrapper = shallow(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  wrapper.setState({districtData: mockData, selectedCards: []});

  expect(wrapper.state().selectedCards.length).toEqual(0);

  const inst = wrapper.instance();
  inst.selectCard('ACADEMY 20');

  expect(wrapper.state().selectedCards.length).toEqual(1);
  expect(wrapper.state().selectedCards).toEqual([{data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}]);
});

it('the removeComparison function should empty the selectedCards array in state', () => {
  const wrapper = shallow(<App />);
  const mockArray = [{data:{2004: 0.154, 2014: 0.665}, location: 'COLORADO'}, {data:{2004: 0.134, 2014: 0.777}, location: 'ACADEMY 20'}];
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  
  wrapper.setState({districtData: mockData, selectedCards: mockArray });
  const inst = wrapper.instance();
  inst.removeComparison();
  expect(wrapper.state().selectedCards.length).toEqual(0);
});



