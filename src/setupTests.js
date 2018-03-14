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
  }
];