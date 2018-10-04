import React, { Component } from 'react';
import StatCard from './StatCard';
import PropTypes from 'prop-types';

const DataCard = (props) => {
 return (
     <div className='data-card'>
      <h1>{props.school.location}</h1>
      <ul>
      <li className={Object.values(props.school.stats)[0] < 0.5 ? 'less-than' : 'more-than'}> 2004: {Object.values(props.school.stats)[0]}</li>
      <li className={Object.values(props.school.stats)[1] < 0.5 ? 'less-than' : 'more-than'}> 2005: {Object.values(props.school.stats)[1]}</li>
      <li className={Object.values(props.school.stats)[2] < 0.5 ? 'less-than' : 'more-than'}> 2006: {Object.values(props.school.stats)[2]}</li>
      <li className={Object.values(props.school.stats)[3] < 0.5 ? 'less-than' : 'more-than'}> 2007: {Object.values(props.school.stats)[3]}</li>
      <li className={Object.values(props.school.stats)[4] < 0.5 ? 'less-than' : 'more-than'}> 2008: {Object.values(props.school.stats)[4]}</li>
      <li className={Object.values(props.school.stats)[5] < 0.5 ? 'less-than' : 'more-than'}> 2009: {Object.values(props.school.stats)[5]}</li>
      <li className={Object.values(props.school.stats)[6] < 0.5 ? 'less-than' : 'more-than'}> 2010: {Object.values(props.school.stats)[6]}</li>
      <li className={Object.values(props.school.stats)[7] < 0.5 ? 'less-than' : 'more-than'}> 2011: {Object.values(props.school.stats)[7]}</li>
      <li className={Object.values(props.school.stats)[8] < 0.5 ? 'less-than' : 'more-than'}> 2012: {Object.values(props.school.stats)[8]}</li>
      <li className={Object.values(props.school.stats)[9] < 0.5 ? 'less-than' : 'more-than'}> 2013: {Object.values(props.school.stats)[9]}</li>
      <li className={Object.values(props.school.stats)[10] < 0.5 ? 'less-than' : 'more-than'}> 2014: {Object.values(props.school.stats)[10]}</li>
      </ul>

    </div>
  )
}

DataCard.propTypes = {
  props: PropTypes.object
}

export default DataCard