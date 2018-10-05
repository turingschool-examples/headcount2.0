import React from 'react';
import ReactDOM from 'react-dom';
import SchoolCard from './SchoolCard';
import { shallow, mount} from 'enzyme';

describe('IdeaForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm searchSchool={searchSchoolMock} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})