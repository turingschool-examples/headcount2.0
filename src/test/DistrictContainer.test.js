import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictContainer from '../components/DistrictContainer';

import kinderGartenData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';

describe('DistrictContainer component', () => {
  let wrapper;

  const mockState = {
    districts: new DistrictRepository(kinderGartenData).findAllMatches(),
    loading: false
  };

  beforeEach(() => {
    wrapper = shallow(<DistrictContainer districts={mockState.districts} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DistrictContainer districts={mockState.districts} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot;
  });
});
