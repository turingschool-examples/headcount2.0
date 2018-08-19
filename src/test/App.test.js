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

  it('should filter the districts array when filter cards is invoked', () => {
    wrapper.instance().filterCards('co');
    expect(wrapper.state().districts.length).toBeLessThan(181);
  });

  it('should add an object to selectedDistricts state when toggleSelected is invoked if selectedDistricts length is less than 2', () => {
    const selected1 = {
      location: 'COLORADO',
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };
    wrapper.instance().toggleSelected(selected1.location);
    expect(wrapper.state().selectedDistricts.length).toBeGreaterThan(0);
  });

  it('should change the selected property on the selected district to true when added to selectedDistricts', () => {
    const selected1 = {
      location: 'COLORADO',
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };
    wrapper.instance().toggleSelected(selected1.location);
    expect(wrapper.state().selectedDistricts[0].selected).toEqual(true);
  });

  it('should remove an object from selectedDistrict state when toggleSelected is invoked on an object already selected', () => {
    const selected1 = {
      location: 'COLORADO',
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };
    wrapper.instance().toggleSelected(selected1.location);
    expect(wrapper.state().selectedDistricts.length).toBeGreaterThan(0);
    wrapper.instance().toggleSelected(selected1.location);
    expect(wrapper.state().selectedDistricts.length).toEqual(0);
  });

  it('should change the selected property on a selected district to false when it is removed from selectedDistricts', () => {
    const selected1 = {
      location: 'COLORADO',
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };
    wrapper.instance().toggleSelected(selected1.location);
    expect(wrapper.state().selectedDistricts[0].selected).toEqual(true);
    wrapper.instance().toggleSelected(selected1.location);
    const foundDistrict = wrapper
      .state()
      .districts.find(district => district.location === selected1.location);
    expect(foundDistrict.selected).toEqual(false);
  });

  it('should not add another selected distric if two selectedDistricts already exist', () => {
    const selected1 = {
      location: 'COLORADO',
      stats: {
        2004: 0.24,
        2005: 0.278
      },
      selected: false
    };
    const selected2 = {
      location: 'ACADEMY 20',
      stats: {
        2010: 0.64,
        2011: 0.672
      },
      selected: false
    };
    const selected3 = {
      location: 'AGATE 300',
      stats: {
        2012: 0.546,
        2013: 0.872
      },
      selected: false
    };

    wrapper.instance().toggleSelected(selected1.location);
    wrapper.instance().toggleSelected(selected2.location);
    wrapper.instance().toggleSelected(selected3.location);
    expect(wrapper.state().selectedDistricts.length).toEqual(2);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
