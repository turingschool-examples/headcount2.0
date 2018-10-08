import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when clearComparison is invoked', () => {
    const initialCompareData = [{
      location: 'denver', 
      stats: [{2001: 2}], 
      selected: true
    },
    {
      location: 'boulder', 
      stats: [{2002: 1}], 
      selected: true
    }];
    const initailAnalysis = {
      'AGATE 300': 0.909, 
      'ARICKAREE R-2': 0.739, 
      compared: 1.23
    };

    wrapper.setState({ 
      compareData: initialCompareData, 
      analysis: initailAnalysis 
    });
    wrapper.instance().clearComparison();

    expect(wrapper.state('compareData')).toEqual([]);
    expect(wrapper.state('analysis')).toEqual({});

  });

  it('should add a district to compareData and invoke makeAnalysis', () => {
    const initialState = [];
    const mockDistrict =  {
      location: 'Denver', 
      stats: [{2007: 1}
      ]};
    const expected = [{
      location: 'Denver', 
      stats: [{2007: 1}], 
      selected: true
    }];
    const spy = spyOn(wrapper.instance(), 'makeAnalysis');

    wrapper.setState({ compareData: initialState });
    wrapper.instance().compareDistrictData(mockDistrict);

    expect(wrapper.state('compareData')).toEqual(expected);
    expect(wrapper.state('compareData').length).toEqual(1);
    expect(spy).toHaveBeenCalled();
  });


  it('should set state when displayAll is invoked', () => {
    const initialState = [];

    wrapper.setState({ data: initialState });
    wrapper.instance().displayAll();

    expect(wrapper.state('data').length).toEqual(181);
  });

  // it('should filter through the data and return an array of matches', () => {
  // })


  // it('should set the state with a new analysis object', () => {
    
  //   const initialAnalysis= {}
  //   const initialCompareData = [{
  //   location: 'denver', 
  //   stats: [{2001: 2}], 
  //   selected: true
  // },
  //   {location: 'boulder', stats: [{2002: 1}], selected: true}];
  //   const expected = {'denver': 2, 'boulder': 1, compared: 2}

  //   wrapper.setState({  analysis: initialAnalysis,
  //                       compareData: initialCompareData })
  //   wrapper.instance().makeAnalysis();

  //   expect(wrapper.state('analysis')).toEqual(expected);
  //   expect(wrapper.state('analysis').length).toEqual(1);

  // });


  it('should remove a card from compareData', () => {
    const initialCompareData = [{
      location: 'denver', 
      stats: [{2001: 2}], 
      selected: true 
    },
    {
      location: 'boulder', 
      stats: [{2002: 1}], 
      selected: true
    }];
    const selectedCard = {
      location: 'boulder', 
      stats: [{2002: 1}], 
      selected: true
    };
    const expected = [{
      location: 'denver', 
      stats: [{2001: 2}], 
      selected: true
    }];

    wrapper.setState({compareData: initialCompareData});
    wrapper.instance().removeCardComparison(selectedCard);

    expect(wrapper.state('compareData')).toEqual(expected);
    expect(wrapper.state('compareData').length).toEqual(1);

  });
  
});

