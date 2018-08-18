import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import DistrictContainer from '../components/DistrictContainer';

import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should populate the category object in state when the component mounts', () => {
    expect(wrapper.state().category).not.toEqual({});
  });

  it('should populate the districts array in state when the component mounts', () => {
    expect(wrapper.state().districts).not.toEqual([]);
  });

  it('should have 181 stats in category.stats state', () => {
    expect(Object.keys(wrapper.state().category.stats).length).toEqual(181);
  });

  it('should render the DistrictContainer component', () => {
    expect(wrapper.find('DistrictContainer').length).toEqual(1);
  });

  it('should render a Search component', () => {
    expect(wrapper.find(DistrictContainer).length).toEqual(1);
  });

  it.skip('should add an object to selectedLocations state when toggleSelected is invoked if selectedLocaitons length is less than 2', () => {});

  it.skip('should remove an object from selectedLocations state when toggleSelected is invoked if selectedLocations lenght is 2', () => {});

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
