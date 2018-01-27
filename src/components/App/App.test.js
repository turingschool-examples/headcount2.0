import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

describe( 'App Component', () => {
  test('renders without crashing', () => {

    const renderedComp = shallow(<App />);

    expect(renderedComp).toMatchSnapshot();
  });

  test('starts with a state of all 181 items', () => {
    
    const renderedComp = shallow(<App />)

    expect(renderedComp.state().data.length).toBe(181);
  });

  test('it should update state if we filter for searched districts', () => {
    
    const renderedComp = shallow(<App />)

    renderedComp.instance().filterCards('Colorado')
    renderedComp.update();

    expect(renderedComp.state().data.length).toBe(2);

    renderedComp.instance().filterCards();
    renderedComp.update();

    expect(renderedComp.state().data.length).toBe(181);
  });

  test('it should be able to select two cards to compare', () => {


  });


})


// should select two cards and render a comparison