import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('IdeaForm', () => {
  let wrapper;

  beforeEach(() => {
    let searchSchoolMock = jest.fn();
    wrapper = shallow(<SearchForm searchSchool={searchSchoolMock} />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});