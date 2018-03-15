import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

export const kinderData = [
  {
    "Location": "Colorado",
    "TimeFrame": 2007,
    "DataFormat": "Percent",
    "Data": 0.39465
  },
  {
    "Location": "Colorado",
    "TimeFrame": 2006,
    "DataFormat": "Percent",
    "Data": 0.33677
  },
  {
    "Location": "Colorado",
    "TimeFrame": 2005,
    "DataFormat": "Percent",
    "Data": 0.27807
  },
  {
    "Location": "Colorado Springs",
    "TimeFrame": 2007,
    "DataFormat": "Percent",
    "Data": 0.39465
  },
  {
    "Location": "Colorado Springs",
    "TimeFrame": 2006,
    "DataFormat": "Percent",
    "Data": 0.33677
  },
  {
    "Location": "Colorado Springs",
    "TimeFrame": 2005,
    "DataFormat": "Percent",
    "Data": 0.27807
  },
  {
    "Location": "Academy 20",
    "TimeFrame": 2007,
    "DataFormat": "Percent",
    "Data": 0.39465
  },
  {
    "Location": "Academy 20",
    "TimeFrame": 2006,
    "DataFormat": "Percent",
    "Data": 0.33677
  },
  {
    "Location": "Academy 20",
    "TimeFrame": 2005,
    "DataFormat": "Percent",
    "Data": 0.27807
  }
];