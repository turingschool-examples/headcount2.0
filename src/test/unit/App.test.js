import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../../src/App';
import Search from '../../../src/Search';


describe('App', () => {
  it('should render a CardsContainer, Search, and DisplayComparedContainer component', () => {
    const wrapper = shallow(<App />);    

    expect(wrapper).toMatchSnapshot();
  })

  it('should have an array length of 181', () => {
    const wrapper = shallow(<App />);    

    expect(wrapper.state('schoolData').length).toEqual(181);
  })

  it('renders and Search component with the correct props', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Search).prop('searchSchoolData')).toEqual(wrapper.instance().searchSchoolData);
  })

  it('should update state when searchSchoolData is called', () => {
    const wrapper = shallow(<App />);
    const expected = [{
      "location": "COLORADO SPRINGS 11", 
      "stats": 
        {
        "2004": 0.069, 
        "2005": 0.509, 
        "2006": 0.638, 
        "2007": 0.994, 
        "2008": 0.992, 
        "2009": 1, 
        "2010": 0.993, 
        "2011": 0.994, 
        "2012": 0.993, 
        "2013": 0.989, 
        "2014": 0.994}
        }
      ];

    wrapper.instance().searchSchoolData('COLORADO springs 11');
    expect(wrapper.state('schoolData')).toEqual(expected);

  })

})
