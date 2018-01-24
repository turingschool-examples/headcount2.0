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
  const renderedComponent = shallow(<App />)
  const mockedDistrict = { 'data' : { '2014' : 0.741 }, 'location': 'COLORADO' }
  renderedComponent.instance().handleSearch('COLORADO')
  expect(renderedComponent.state().districtCards).toEqual(mockedDistrict)
})

