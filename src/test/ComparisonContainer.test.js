import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ComparisonContainer from '../components/ComparisonContainer';

describe('ComparisonContainer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ComparisonContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
