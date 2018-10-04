import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../../src/App';

describe('App', () => {
  it('should render a CardsContainer and Search component', () => {
    const wrapper = shallow(<App />);    

    expect(wrapper).toMatchSnapshot();
  })

  it('should have an array length of 181', () => {
    const wrapper = shallow(<App />);    

    expect(wrapper.state('schoolData').length).toEqual(181);
  })

})
