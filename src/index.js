import React from 'react';
import ReactDOM from 'react-dom';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import App from './App/App.js';
import './index.css';

const kindergartnersInFullDayProgram = new DistrictRepository(kinderData);

ReactDOM.render(
  <App districts={kindergartnersInFullDayProgram} />,
  document.getElementById('root')
);
