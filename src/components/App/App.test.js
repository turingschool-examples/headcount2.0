import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

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
})

it("should show a card if its state districtData has data in it", () => {
  const wrapper = shallow(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2005: 0.555}, location: 'COLORADO'}};

  wrapper.setState({districtData: mockData});
  expect(wrapper).toMatchSnapshot();
})

it('should have ONE card in the state selected cards array when a card is selected', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  
  wrapper.setState({districtData: mockData});
  expect(wrapper.state().selectedCards).toEqual([]);
  wrapper.find('article').first().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(1);
})

it('should have TWO cards in the selectCardArray when two are clicked', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}};
  
  wrapper.setState({districtData: mockData});
  wrapper.find('article').first().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(1);
  wrapper.find('article').last().simulate('click');
  expect(wrapper.state().selectedCards.length).toEqual(2);
})

it('should have the compare container in the DOM within it when there are two selected cards in the array', () => {
  const wrapper = mount(<App />);
  const mockData = {COLORADO: {data:{2004: 0.154, 2014: 0.555}, location: 'COLORADO'}, 'ACADEMY 20': {data:{2004: 0.222, 2014: 0.777}, location: 'ACADEMY 20'}}
  const mockArray = [ { data: { '2004': 0.154, '2014': 0.555 }, location: 'COLORADO' },
    { data: { '2004': 0.222, '2014': 0.777 }, location: 'ACADEMY 20' } ]
  
  wrapper.setState({districtData: mockData, selectedCards: mockArray});
  expect(wrapper.find('article.compared-cards-container').length).toEqual(1)
})

//for each function make instance of and test that it returns

