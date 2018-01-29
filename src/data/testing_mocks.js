import React from 'react';

const mockData = {
  defaultState: {
    schoolData: {},
    searchResults: [],
    searchError: false,
    districtRepository: {},
    comparisonData: {} 
  },
  cleanedCoKinderData: {
    "data": {
      "2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0.395, 
      "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, 
      "2012": 0.695, "2013": 0.703, "2014": 0.741
    }, 
    "dataType": "Percent", 
    "location": "COLORADO"
  },
  cleanedYumaKinderData: {
    data: {
      2004: 0, 2005: 1, 2006: 1, 2007: 1, 2008: 1, 2009: 1,
      2010: 1, 2011: 1, 2012: 1, 2013: 1, 2014: 1
    },
    dataType: "Percent",
    location: "YUMA SCHOOL DISTRICT 1"
  },
  rawUpdateData: [
    {
      Location: 'Colorado', TimeFrame: 2007, 
      DataFormat:'Percent', Data:.337 
    }
  ],
  cleanUpdateData: {
    "data": {
      "COLORADO": {
        "data": {
          "2007": 0.337
        }, 
        "dataType": "Percent", 
        "location": "COLORADO"
      }
    }
  },
  mockSearchData: {
    "data": {
      "2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, 
      "2008": 0.385, "2009": 0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, 
      "2013": 0.488, "2014": 0.49
    }, 
    "dataType": "Percent", 
    "location": "ACADEMY 20"
  },
  comparison: {
    "COLORADO": 0.53,
    "YUMA SCHOOL DISTRICT 1": 0.909,
    "compared": 0.583
  }
}

export default mockData;
