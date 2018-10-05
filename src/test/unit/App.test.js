import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../../src/App';
import Search from '../../../src/Search';

describe('App', () => {
  it('should render a CardsContainer and Search component', () => {
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

  // it('searchSchoolData updates state', () => {
  //   const wrapper = shallow(<App />);
  //   const initialState = []
  //   const mockValue = {value: 'c'}
  //   const expectedState = [{value: 'c'}];
    

  //   wrapper.setState({ schoolData: initialState });
  //   wrapper.instance().searchSchoolData(mockValue);

  //   expect(wrapper.state('schoolData')).toEqual(expectedState);
  //   expect(wrapper.state('schoolData').length).toEqual(1);
  // })

})
