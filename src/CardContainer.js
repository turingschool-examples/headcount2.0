import React from 'react';
import DataCard from './DataCard';
import PropTypes from 'prop-types';


const CardContainer = ({schoolCards, compareTwoCards}) => {
  const location = schoolCards.map(school => <DataCard compareTwoCards={compareTwoCards}
    school={school}/>);
  return (
    <div className="cardContainer">
      { location }
    </div>
  );
};

CardContainer.propTypes = {
  schoolCards: PropTypes.object,
  compareTwoCards: PropTypes.object
};

CardContainer.propTypes = {
  schoolCards: PropTypes.array,
  compareTwoCards: PropTypes.func
};

export default CardContainer;