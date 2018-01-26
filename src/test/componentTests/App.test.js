import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should match the snapshot', () => {
  const renderedComponent = shallow(<App/>)
  expect(renderedComponent).toMatchSnapshot()
})

it('should gather clean data from all districts', () => {
  const renderedComponent = shallow(<App/>)
  expect(Object.keys(renderedComponent.state().allDistrictData).length).toBe(181)
});

it('when handleSearch is called with a district, the state should have that district object', () => {
  // We did tdd to mock a controled data set but after we built out App
  // we need to change the test to reflect the kindergarden data
  const renderedComponent = shallow(<App />)
  const mockedDistrict = {"data": {"2004": 0.24, 
                          "2005": 0.278, 
                          "2006": 0.337, 
                          "2007": 0.395, 
                          "2008": 0.536, 
                          "2009": 0.598, 
                          "2010": 0.64, 
                          "2011": 0.672, 
                          "2012": 0.695, 
                          "2013": 0.703, 
                          "2014": 0.741}, 
                          "location": "COLORADO"}
  renderedComponent.instance().handleSearch('COLORADO')
  expect(renderedComponent.state().districtCards).toEqual(mockedDistrict)
})

