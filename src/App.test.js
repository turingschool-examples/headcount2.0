import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  it('Matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot;
  });

  it.skip('componentDidMount calls the method prepareDataForDisplay with the correct params', () => {
    const wrapper = shallow(<App />);

  });

  it.skip('PrepareDataForDisplay calls findAllMatches on the repository held in state', () => {

  });

  it('PrepareDataForDisplay sets the displayData of state', () => {
    let mockDistrictRepository = {
      stats: [
      {
        "Location": "VIRGINIA",
        "TimeFrame": 1909,
        "DataFormat": "Percent",
        "Data": 0.107
      },
      {
        "Location": "VIRGINIA",
        "TimeFrame": 3999,
        "DataFormat": "Percent",
        "Data": 5.999
      },
      {
        "Location": "NorthCarolina",
        "TimeFrame": 1999,
        "DataFormat": "Percent",
        "Data": 1.007
      },
      {
        "Location": "NorthCarolina",
        "TimeFrame": 2099,
        "DataFormat": "Percent",
        "Data": 1.999
      }],
      findAllMatches: jest.fn(() => {
        return [{location: 'NorthCarolina', 
        stats: {1999: 0.007, 2099: 1.999 }}, 
      {location: 'VIRGINIA', 
       stats: {1909: 0.107, 3999: 5.999 }}]
      })
    };

    const expected = [{location: 'NorthCarolina', 
        stats: {1999: 0.007, 2099: 1.999 }}, 
      {location: 'VIRGINIA', 
       stats: {1909: 0.107, 3999: 5.999 }}]
    const wrapper = shallow(<App />);

    wrapper.setState({
      dataSet: 'College',
      displayData: [],
      searchWord: '',
      repository: mockDistrictRepository
    });
    wrapper.instance().prepareDataForDisplay();
    expect(wrapper.state('displayData')).toEqual(expected);
  })


})
