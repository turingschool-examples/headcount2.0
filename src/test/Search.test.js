import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Search from '../components/Search';

describe('Search component', () => {
  let wrapper;
  let filterCards;

  beforeEach(() => {
    filterCards = jest.fn();
    wrapper = shallow(<Search filterCards={filterCards} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search filterCards={filterCards} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have an initial state', () => {
    expect(wrapper.state().searchValue).toEqual('');
  });

  it('it should bind searchValue state to input value', () => {
    wrapper
      .find('.search-input')
      .simulate('change', { target: { name: 'searchValue', value: 'Denver' } });

    expect(wrapper.state().searchValue).toEqual('Denver');
  });

  it('should call the filterCards function', () => {
    wrapper
      .find('.search-input')
      .simulate('change', { target: { name: 'searchValue', value: 'Denver' } });

    expect(filterCards).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot;
  });
});
