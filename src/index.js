import React from 'react';
import { render } from 'react-dom';
import './index.css';
import data from './data/kindergartners_in_full_day_program'
import DistrictRepository from './helper'

import App from './Components/App/App';

const districts = new DistrictRepository(data)

render( <App districts={districts} />, document.getElementById('root') );
