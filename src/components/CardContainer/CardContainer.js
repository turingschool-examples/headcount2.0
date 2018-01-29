import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({schoolData, handleCompareCards, comparisonData}) => {
  const schoolsToRender = Object.keys(schoolData)
    .map((school, index) => {
      let select = false;
      if (Object.keys(comparisonData). length === 1 && 
        school === comparisonData.school1.location) {
        select = true;
      } else if (Object.keys(comparisonData).length > 1 && 
        (school === comparisonData.school1.location 
          || school === comparisonData.school2.location)) {
        select = true;
      }
      return (
        <a href='#' key={index}>
          <Card
            schoolData={schoolData[school]} 
            handleCompareCards={handleCompareCards}
            size='large'
            selected={select}
          />
        </a>
      );
    });

  return (
    <section className="CardContainer">
      {schoolsToRender}
    </section>
  );
};

const { oneOfType, objectOf, arrayOf,
  shape, string, number, func, object } = PropTypes;
  
CardContainer.propTypes = {
  schoolData: oneOfType([
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    })),
    arrayOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    }))
  ]),
  handleCompareCards: func.isRequired,
  comparisonData: shape({
    comparison: object
  }),
  school1: 
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    })),
  school2: 
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    }))
};

export default CardContainer;