import React, { Component } from 'react';
import SchoolCard from './SchoolCard'

const SchoolList = ({ data }) => {
  const schools = Object.keys(data);
  const schoolsArray = schools.map( school => data[school]);
  const schoolCards =  schoolsArray.map((school, i) => <SchoolCard data={school} key={i}/>);
  return (
    <div>
      { schoolCards }
    </div>
  )
}

export default SchoolList
