import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './search';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

describe('Search', () => {

  it('renders without crashing', () => {
    const updateRepoInStateMock = jest.fn()
    shallow(<Search updateRepoInState={ updateRepoInStateMock } />)
  })

})
