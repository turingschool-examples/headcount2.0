import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    wrapper = shallow(<App />, {disableLifeCycleMethods : true});
    
    expect(wrapper.state()).toMatchSnapshot();
  })

  describe('componentDidMount', () => {
    it('should invoke populateDistrict on componentDidMount', () => {
      wrapper.instance().populateDistrict = jest.fn();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().populateDistrict).toHaveBeenCalled();
    })
  })

  describe('populateDistrict', () => {
    it('should instantiate a new repository and set state', () => {
      let mockData = [
        {
          "Location": "school1",
          "TimeFrame": 2007,
          "Data": 1
        },  {
          "Location": "school2",
          "TimeFrame": 2005,
          "Data": 1
        },
      ]
      
    })
  })
  

  describe('clearComparison', () => {
    it('should invoke populateDistrict', () => {
      wrapper.instance().populateDistrict = jest.fn();
      wrapper.instance().clearComparison();

      expect(wrapper.instance().populateDistrict).toHaveBeenCalled();
    })

    it('should update state', () => {
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
  })

  describe('checkComparison', () => {
    it('should have a default state for selected as false', () => {
      wrapper.setState({ selected: false })

      expect(wrapper.state('selected')).toEqual(false);
    })

    it('should invoke removeCardComparison if it has a property of selected', () => {
      let mockSelectedCard = {location: 'school', stats: {2001: 1}, selected: true}
      wrapper.instance().removeCardComparison = jest.fn()

      wrapper.instance().checkComparison(mockSelectedCard)

      expect(wrapper.instance().removeCardComparison).toHaveBeenCalled()
    })

    it('should change selected to true if the card exists in compareData', () => {
      let mockSelectedCard = {location: 'school', stats: {2001: 1}, selected: true}
      let mockCompareData = [{location: 'school', stats: {2001: 1}, selected: true}]
      wrapper.setState({ compareData: mockCompareData, selected: false})

      wrapper.instance().checkComparison(mockSelectedCard)

      expect(wrapper.state().selected).toEqual(true)
    })
    it('should invoke compareDistrictData if the card had not been selected and was not in compareData', () => {
      let mockSelectedCard = {location: 'school', stats: {2001: 1}, selected: false}
      let mockCompareData = []
      wrapper.setState({compareData: mockCompareData})
      wrapper.instance().compareDistrictData = jest.fn()

      wrapper.instance().checkComparison(mockSelectedCard)

      expect(wrapper.instance().compareDistrictData).toHaveBeenCalled()
    })
  })

  describe('compareDistrictData', () => {
    it('should remove an element from the array if the length is 2', () => {
      let mockCompareData = [
          {location: 'school', stats: {2001: 1}, selected: true},
          {location: 'school2', stats: {2001: 1}, selected: true}
        ]
      let mockSelectedCard = {location: 'school3', stats: {2001: 1}, selected: false}
      wrapper.instance().makeAnalysis = jest.fn()
      wrapper.setState({compareData: mockCompareData})

      wrapper.instance().compareDistrictData(mockSelectedCard)

      expect(wrapper.state().compareData.length).toEqual(2)
    })

    it('should set state', () => {
      let mockCompareData = [
          {location: 'school', stats: {2001: 1}, selected: true},
          {location: 'school2', stats: {2001: 1}, selected: true}
        ]
      let mockSelectedCard = {location: 'school3', stats: {2001: 1}, selected: false}
      let expected = [
          {location: 'school3', stats: {2001: 1}, selected: true},
          {location: 'school', stats: {2001: 1}, selected: true}
        ]
      wrapper.instance().makeAnalysis = jest.fn()
      wrapper.setState({compareData: mockCompareData})

      wrapper.instance().compareDistrictData(mockSelectedCard)

      expect(wrapper.state().compareData).toEqual(expected)

    })

    it('should invoke makeAnalysis after it set State', () => {
      let mockCompareData = [
          {location: 'school', stats: {2001: 1}, selected: true},
          {location: 'school2', stats: {2001: 1}, selected: true}
        ]
      let mockSelectedCard = {location: 'school3', stats: {2001: 1}, selected: false}
      wrapper.instance().makeAnalysis = jest.fn()
      wrapper.setState({compareData: mockCompareData})

      wrapper.instance().compareDistrictData(mockSelectedCard)

      expect(wrapper.instance().makeAnalysis).toHaveBeenCalled()
    })
  })

  describe('displayAll', () => {
    it('should set state when displayAll is invoked', () => {
      wrapper.setState({selected: true})
      wrapper.instance().populateDistrict = jest.fn()

      wrapper.instance().displayAll();

      expect(wrapper.state().selected).toEqual(false);
    });

    it('should invoke populateDistrict', () => {
      wrapper.instance().populateDistrict = jest.fn()

      wrapper.instance().displayAll();

      expect(wrapper.instance().populateDistrict).toHaveBeenCalled();
    })
  })

  describe('filterData', () => {
    it('should filter through the data and return an array of matches', () => {
      //how to access a method on the instantiate class that is in state
    })
    it('should set State', () => {})
  })

  describe('makeAnalysis', () => {
    let mockCompareData = [
        {location: 'school', stats: {2001: 1}, selected: true},
        {location: 'school2', stats: {2001: 1}, selected: true}
      ]
    let mockData = [
            {
              "Location": "school1",
              "TimeFrame": 2007,
              "Data": 1
            },  {
              "Location": "school2",
              "TimeFrame": 2005,
              "Data": 1
            },
          ]
    let data = new DistrictRepository(mockData)

    it('should invoke compareDistrictAverages if the array has two elements', () => {
      wrapper.setState({
        repository: data,
        compareData: mockCompareData
      })

      wrapper.instance().compareDistrictAverages = jest.fn()

      wrapper.instance().makeAnalysis()

      expect(wrapper.instance().compareDistrictAverages).toHaveBeenCalled()
    })
    
    it('should set the state with a new analysis object', () => {
      // wrapper.setState({
      //   repository: data,
      //   compareData: mockCompareData,
      //   analysis: {}
      // })

      // let expected = {school: 1, school2: 1, compared: 1}

      // wrapper.instance().makeAnalysis()

      // expect(wrapper.state().analysis).toEqual(expected)
    })
  })

  describe('removeCardComparison', () => {

    it('should remove a selected card from compareData', () => {
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
  })
});

