import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../src/Card';
import DistrictRepository from '../src/helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';


describe ('Card', () => {
  // 
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Card school={() => {}} data={() => {}}/>, div);
  // });

  // it('renders data inside <p> tags', () => {
  //   const wrapper = shallow(<App />);
  //   const welcome = <h2>Welcome To Headcount 2.0</h2>;
  //
  //   expect(wrapper.contains(welcome)).toEqual(true);
  // })

  // it('button should have a class of input-field', () => {
  //   const wrapper = shallow(<Controls />);
  //
  //   expect(wrapper.find('button').hasClass('filter-btn')).toEqual(true);
  // })

})
