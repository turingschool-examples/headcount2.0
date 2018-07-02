import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state.matchingDistricts after componentDidMount runs', () => {
    const wrapper = shallow(<App />);
    const expectedState = 181;
    const actualState = wrapper.instance().state;
    expect(Object.keys(actualState.matchingDistricts).length).toEqual(expectedState);
  });

  it('findDistrict function is called it should return the corresponding objects', () => {
    const wrapper = mount(<App />);
  
    const mockInput = 'Colorado';
    wrapper.instance().findDistrict(mockInput);
    const actualState = wrapper.instance().state;

    expect(Object.keys(actualState.matchingDistricts).length).toEqual(2);
  });

  it('when the selectDistrict function is called it should update the comparedDistricts object in state', () => {
    const mockInput = 'Colorado';
    const wrapper = shallow(<App />);

    wrapper.instance().selectDistrict(mockInput);

    const actualState = wrapper.instance().state;
    expect(Object.keys(actualState.comparedDistricts).length).toEqual(1);
  });

  it('selectDictrict removes a district from the state when the card is clicked again', () => {
    const wrapper = shallow(<App />);
    const mockInput = 'ACADEMY 20';
    const initialState = { COLORADO: 
                           { stats: 
                              { 2004: 0.24,
                                2005: 0.278,
                                2006: 0.337,
                                2007: 0.395,
                                2008: 0.536,
                                2009: 0.598,
                                2010: 0.64,
                                2011: 0.672,
                                2012: 0.695,
                                2013: 0.703,
                                2014: 0.741 },
                           location: 'COLORADO',
                           selected: true },
                          'ACADEMY 20': 
                           { stats: 
                              { 2004: 0.302,
                                2005: 0.267,
                                2006: 0.354,
                                2007: 0.392,
                                2008: 0.385,
                                2009: 0.39,
                                2010: 0.436,
                                2011: 0.489,
                                2012: 0.479,
                                2013: 0.488,
                                2014: 0.49 },
                           location: 'ACADEMY 20',
                           selected: true} }
    const expectedState = { COLORADO: 
                             { stats: 
                                { 2004: 0.24,
                                  2005: 0.278,
                                  2006: 0.337,
                                  2007: 0.395,
                                  2008: 0.536,
                                  2009: 0.598,
                                  2010: 0.64,
                                  2011: 0.672,
                                  2012: 0.695,
                                  2013: 0.703,
                                  2014: 0.741 },
                             location: 'COLORADO',
                             selected: true }
                          }
    wrapper.setState({comparedDistricts: initialState});
    wrapper.instance().selectDistrict(mockInput);
    expect(initialState).toEqual(expectedState);
  });

});


