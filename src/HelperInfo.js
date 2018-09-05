import React from 'react';
import PropTypes from 'prop-types';

const HelperInfo = ({ toggleHelperInfo, displayHelperInfo }) => {
  const cardInfo = displayHelperInfo ? '' : 'CardContainer__info--show';

  return (
    <div className={'CardContainer__info ' + cardInfo}>
      <p>
        Compare district stats by clicking on two districts from the list 
        on the left. To change districts click on the districts in the list 
        on the left or remove them individually by clicking on the district 
        card itself. Search for districts in upper left corner. To change 
        data set click on title and select from dropdown.
      </p>
      <button onClick={ () => toggleHelperInfo() }>X</button>
    </div>
  );
};

export default HelperInfo;

HelperInfo.propTypes = {
  toggleHelperInfo: PropTypes.func,
  displayHelperInfo: PropTypes.bool
};