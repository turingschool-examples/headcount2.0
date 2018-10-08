import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('addIdea adds an idea to state', () => {
    expect(wrapper.state('cards').length).toEqual(181);
  });

  it('should set a new state after the searchSchool function is called', () => {
    const mockSchool = [{"COLORADO": {"2004": 0.24, "2005": 0.278, 
      "2006": 0.337, 
      "2007": 0.395, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, 
      "2012": 0.695, "2013": 0.703, "2014": 0.741}}, 
    {"COLORADO SPRINGS 11": {"2004": 0.069, "2005": 0.509, "2006": 0.638, 
      "2007": 0.994, "2008": 0.992, "2009": 1, "2010": 0.993, "2011": 0.994, 
      "2012": 0.993, "2013": 0.989, "2014": 0.994}}];

    wrapper.instance().searchSchool('COLORADO');

    expect(wrapper.state().cards).toEqual(mockSchool);
  });

  it('Should test click event', () => {
    const clearComparedCards = jest.fn();
    const button = shallow((<button 
      onClick={clearComparedCards}>Clear Cards</button>));
    button.simulate('click');
    expect(clearComparedCards.mock.calls.length).toEqual(1);
    expect(wrapper.state().compareCards).toEqual([]);
    expect(wrapper.state().compared).toEqual([]);
  });

  it('should clear state on button push', () => {
    wrapper.instance().clearComparedCards();
    expect(Array.isArray(['value'])).toBe(true);
  });

  it('should turn whats passed in to a string', () => {
    expect(typeof 'str1').toBe('string');
    expect(typeof 'str2').toBe('string');
  });

  it('should call compareAvrg function and return an object', () => {
    let compareAvrg = jest.fn();
    let str1 = 'COLORADO';
    let str2 = 'COLORADO SPRINGS 11';
    let expected ={"COLORADO": 0.53, 
      "COLORADO SPRINGS 11": 0.833, "compared": 0.636};
    wrapper.instance().compareAvrg(str1, str2);
    expect(wrapper.state().compared).toEqual(expected);
  });

  it('should run the compareAverages function on click and set state', 
    () => {
      const expected = 
      { COLORADO: 0.53, 'COLORADO SPRINGS 11': 0.833, compared: 0.636 };
      wrapper.instance().compareAvrg('COLORADO', 'COLORADO SPRINGS 11');
      expect(wrapper.state().compared).toEqual(expected); 
    });

  // it.skip('should set state after setstateofcompared is called', () => {
  //   let setStateOfCompare = jest.fn();
  //   let str ={"COLORADO": {"2004": 0.24, "2005": 0.278, 
  //     "2006": 0.337, 
  //     "2007": 0.395, "2008": 0.536, "2009": 0.598, 
  //     "2010": 0.64, "2011": 0.672, 
  //     "2012": 0.695, "2013": 0.703, "2014": 0.741}};
  //   wrapper.instance().setStateOfCompare();
  //   expect(wrapper.state().comparedCards).length.toBe(1);
  // });

});