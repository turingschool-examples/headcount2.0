import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import arrow from '../../images/arrow2.gif';
import './CompareContainer.css';

const CompareContainer = (props) => {
  const display = getDisplay();
  // let props.school1Avg;
  // let props.school2Avg;


  // if (comparison[props.school1.location] >
  //   comparison[props.school2.location]) {
  //   props.school1Avg = 'high';
  //   props.school2Avg = 'low';
  // } else {
  //   props.school1Avg = 'low';
  //   props.school2Avg = 'high';
  // }

  function getDisplay() {
    if (props.hideComparison === 'hide') {
      return; 
    } else if (props.hideComparison === 'displayOne') {
      return (
        <section className={props.hideComparison}>
          <Card
            schoolData={props.school1}
            handleCompareCards={props.removeComparison}
            size='small'
          />
          <div className="instructions-cont">
            <p className='instructions'>click another to compare</p>
            <img src={arrow} alt="Choose a Card To Compare With" id="arrow"/>
          </div>
          <div className='shadow-card'>
          </div>
        </section>
      );
    } else if (props.hideComparison === 'displayAll') {
      return (
        <section className={props.hideComparison}>
          <Card
            schoolData={props.school1}
            handleCompareCards={props.handleCompareCards}
            size='large'
          />
          <article className="comparison">
            <div>
              <h3>{props.school1.location}</h3>
              <h4>{props.comparison[props.school1.location]}</h4>
            </div>
            <div>
              <h2 className='difference'>Differential</h2>
              <h2 className='difference'>{props.comparison.compared}</h2>
            </div>
            <div>
              <h3>{props.school2.location}</h3>
              <h4>{props.comparison[props.school2.location]}</h4>
            </div>
          </article>
          <Card
            schoolData={props.school2}
            handleCompareCards={props.handleCompareCards}
            size='large'
          />
          <button onClick={props.removeComparison}>Reset</button>
        </section>
      );
    }
  }

  return (
    <div className="CompareContainer">
      {display}
    </div>
  );
};

const { string, func, shape, objectOf, number, oneOfType } = PropTypes;

CompareContainer.propTypes = {
  hideComparison: string.isRequired,
  handleCompareCards: func.isRequired,
  school1: oneOfType([
    shape({}), 
    shape({
      data: objectOf(number).isRequired,
      dataType: string,
      location: string.isRequired
    })
  ]),
  school2: oneOfType([
    shape({}),
    shape({
      data: objectOf(number).isRequired,
      dataType: string,
      location: string.isRequired
    })
  ]),
  comparison: objectOf(number).isRequired,
  removeComparison: func.isRequired
};

export default CompareContainer;