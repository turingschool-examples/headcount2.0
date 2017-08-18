import React from 'react';
import SchoolCard from './SchoolCard'
import PropTypes, { object, array, func } from 'prop-types'

const SchoolList = ({ data, findAverage, clickedCard }) => {
  const schools = Object.keys(data);
  const schoolCards =  schools.map((school, i) =>
    <SchoolCard data={data[school]} key={i} findAverage={findAverage} clickedCard={clickedCard} />);

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
