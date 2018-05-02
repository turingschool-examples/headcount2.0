import React from 'react';
import { render } from 'react-dom';
import './index.css';
import DistrictRepository from './helper';
import App from './App';
import kinderData from './data/kindergartners_in_full_day_program';

const districts = new DistrictRepository(kinderData);

render( <App districts={ districts } />, document.getElementById('root') );
