import React, { Component } from 'react';
import StatCard from './StatCard';

const DataCard = (props) => {
  console.log(props.school.stats)
 return (
    <div className='data-card'>
      <h1>{props.school.location}</h1>
      <ul>
      <li>2004: {Object.values(props.school.stats)[0]}</li>
      <li>2005: {Object.values(props.school.stats)[1]}</li>
      <li>2006: {Object.values(props.school.stats)[2]}</li>
      <li>2007: {Object.values(props.school.stats)[3]}</li>
      <li>2008: {Object.values(props.school.stats)[4]}</li>
      <li>2009: {Object.values(props.school.stats)[5]}</li>
      <li>2010: {Object.values(props.school.stats)[6]}</li>
      <li>2011: {Object.values(props.school.stats)[7]}</li>
      <li>2012: {Object.values(props.school.stats)[8]}</li>
      <li>2013: {Object.values(props.school.stats)[9]}</li>
      <li>2014: {Object.values(props.school.stats)[10]}</li>
      </ul>

    </div>
  )
}

export default DataCard