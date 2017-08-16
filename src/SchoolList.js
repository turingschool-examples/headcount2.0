import React, { Component } from 'react';
import SchoolCard from './SchoolCard'
import PropTypes, { object, func } from 'prop-types'

const SchoolList = ({ data, findAverage }) => {
  const schools = Object.keys(data);
  const schoolsArray = schools.map( school => data[school]);
  const schoolCards =  schoolsArray.map((school, i) => <SchoolCard data={school} key={i} findAverage={findAverage}/>);

  return (
    <div>
      { schoolCards }
    </div>
  )
}

SchoolList.propTypes = {
  data: object,
  findAverage: func
}

export default SchoolList
