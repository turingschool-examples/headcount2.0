import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictContainer from '../components/DistrictContainer';

import kinderGartenData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('DistrictContainer component', () => {
  let wrapper;

  const mockState = {
    category: new DistrictRepository(kinderGartenData),
    loading: false
  };

  beforeEach(() => {
    wrapper = shallow(<DistrictContainer category={mockState.category} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DistrictContainer category={mockState.category} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render 181 card components', () => {
    expect(wrapper.find('DistrictCard').length).toEqual(181);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
