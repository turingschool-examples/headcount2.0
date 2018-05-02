import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CardArea from './CardArea';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const app = shallow(<App />);

    expect(app).toHaveLength(1);
  });

  it('should have default state', () => {
    const app = shallow(<App />);
    const expectedState = [];

    expect(app.state('selectedCards')).toEqual(expectedState);
  });

  it('should render CardArea', () => {
    const app = shallow(<App />);

    expect(app.find(CardArea)).toHaveLength(1);
  });

  it('matches the snapsnot', () => {
    const app = renderer.create(<App />).toJSON();

    expect(app).toMatchSnapshot();
  })
});
