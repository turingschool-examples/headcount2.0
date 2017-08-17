import React from 'react';
import SchoolCard from './SchoolCard'
import PropTypes, { object, array, func } from 'prop-types'

const SchoolList = ({ data, findAverage }) => {
  const schools = Object.keys(data);
  const schoolCards =  schools.map((school, i) =>
    <SchoolCard data={data[school]} key={i} findAverage={findAverage} />);

  return (
    <div>
      { schoolCards }
    </div>
  )
}

SchoolList.propTypes = {
  data: PropTypes.oneOfType([
    object,
    array
  ]),
  findAverage: func
}

export default SchoolList
