import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow, mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import CardContainer from '../../CardContainer';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it.skip('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  it('state is equal to an object', () => {
    expect(app.state().schoolData).toBeInstanceOf(Object);
  });

  it('should have state.data with length of 181', () => {
    expect(app.state().schoolNames).toHaveLength(181);
  });

  it('renders CardContainer with correct props', () => {
    expect(app.find(CardContainer).prop('schoolData')).toBeInstanceOf(Object);
  });

  it('initiates having state with correct properties', () => {
    const actual = Object.keys(app.instance().state);
    const expected = ['schoolRepository', 'schoolNames', 'schoolData'];

    expect(actual).toEqual(expected);
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const app = mount(<App />);
    app.instance().componentDidMount;

    expect(spy).toHaveBeenCalled();
  });
});

