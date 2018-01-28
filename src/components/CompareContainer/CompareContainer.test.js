/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareContainer from './CompareContainer';

describe('getDisplay', () => {

  it('should match the snapshot if it is given an empty array', () => {
    const mockedComparisonData = []
    const wrapper = shallow(<CompareContainer 
                              handleCompareCards={() => {}}
                              removeComparison={() => {}}
                              comparisonData={mockedComparisonData}
                            />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot if comparisonData has only 1 object', () => {
    const mockedComparisonData = [
      {
        data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
          2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
        dataType: "Percent",
        location: "ACADEMY 20"
      }
    ]
    const wrapper = shallow(<CompareContainer 
                              handleCompareCards={() => {}}
                              removeComparison={() => {}}
                              comparisonData={mockedComparisonData}
                            />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when it is given a full comparison', () => {
    const mockedComparisonData = [
        {
          data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
            2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
          dataType: "Percent",
          location: "ACADEMY 20"
        },
        {
          data: {2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0.844, 2009: 0.96, 
            2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1},
          dataType: "Percent",
          location: "AKRON R-1"
        },
        {
          "ACADEMY 20": 0.407, "AKRON R-1": 0.619, compared: 0.658
        }
      ]
    const wrapper = shallow(<CompareContainer 
                              handleCompareCards={() => {}}
                              removeComparison={() => {}}
                              comparisonData={mockedComparisonData}
                            />)
    expect(wrapper).toMatchSnapshot();  
  })

})


// it.skip('should exist and render nothing when hideComparison is hide', () => {
//   const mockedHandleCompareCards = jest.fn();
//   const mockedRemoveComparison = jest.fn();
//   const mockedComparisonData = [
//       {
//         data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
//           2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
//         dataType: "Percent",
//         location: "ACADEMY 20"
//       },
//       {
//         data: {2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0.844, 2009: 0.96, 
//           2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1},
//         dataType: "Percent",
//         location: "AKRON R-1"
//       },
//       {
//         "ACADEMY 20": 0.407, "AKRON R-1": 0.619, compared: 0.658
//       }
//     ]
//   const wrapper = shallow(<CompareContainer 
//                             handleCompareCards={mockedHandleCompareCards}
//                             comparisonData={mockedComparisonData}
//                             removeComparison={mockedRemoveComparison}
//                           />)

//   expect(wrapper).toBeDefined();
//   expect(wrapper.find('div').length).toEqual(1);
//   expect(wrapper.find('.displayOne').length).toEqual(0);
//   expect(wrapper.find('.displayAll').length).toEqual(0);
// })

// it.skip('should render a comparison container when one card is selected', () => {
//   const mockedHideComparison = 'displayOne';
//   const mockedHandleCompareCards = jest.fn();
//   const mockedRemoveComparison = jest.fn();
//   const mockedSchool1 = {
//     data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
//       2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
//     dataType: "Percent",
//     location: "ACADEMY 20"}
//   const mockedSchool2 = {
//     data: {2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0.844, 2009: 0.96, 
//       2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1},
//     dataType: "Percent",
//     location: "AKRON R-1"
//   }
//   const mockedComparison = {"ACADEMY 20": 0.407, "AKRON R-1": 0.619, compared: 0.658 }

//   const wrapper = shallow(<CompareContainer 
//                             hideComparison={mockedHideComparison}
//                             handleCompareCards={mockedHandleCompareCards}
//                             school1={mockedSchool1}
//                             school2={mockedSchool2}
//                             comparison={mockedComparison}
//                             removeComparison={mockedRemoveComparison}
//                             />)
//   expect(wrapper.find('.displayOne').length).toEqual(1);
//   expect(wrapper.find('.displayAll').length).toEqual(0);
// })

// describe('displayAll', () => {
//   let wrapper;

//   beforeEach(() => {
//     const mockedHideComparison = 'displayAll';
//     const mockedHandleCompareCards = jest.fn();
//     const mockedRemoveComparison = jest.fn();
//     const mockedSchool1 = {
//       data: {2004: 0.302, 2005: 0.267, 2006: 0.354, 2007: 0.392, 2008: 0.385,
//         2009: 0.39, 2010: 0.436, 2011: 0.489, 2012: 0.479, 2013: 0.488, 2014: 0.49},
//       dataType: "Percent",
//       location: "ACADEMY 20"}
//     const mockedSchool2 = {
//       data: {2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0.844, 2009: 0.96, 
//         2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1},
//       dataType: "Percent",
//       location: "AKRON R-1"
//     }
//     const mockedComparison = {"ACADEMY 20": 0.407, "AKRON R-1": 0.619, compared: 0.658 }

//     wrapper = shallow(<CompareContainer 
//                         hideComparison={mockedHideComparison}
//                         handleCompareCards={mockedHandleCompareCards}
//                         school1={mockedSchool1}
//                         school2={mockedSchool2}
//                         comparison={mockedComparison}
//                         removeComparison={mockedRemoveComparison}
//                       />)
//   })

//  it.skip('should render another comparison container when two cards is selected', () => {
//     expect(wrapper.find('.displayOne').length).toEqual(0);
//     expect(wrapper.find('.displayAll').length).toEqual(1);
//   })

//  it.skip('should display no comparison container after remove Comparison is simulated', () => {
//     wrapper.find('button').simulate('click')
//     // expect(wrapper.find('.displayOne').length).toEqual(0);
//     // expect(wrapper.find('.displayAll').length).toEqual(0);

//  })
