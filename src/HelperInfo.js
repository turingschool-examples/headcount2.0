import React from 'react';
import PropTypes from 'prop-types';

const HelperInfo = ({ toggleHelperInfo }) => {
  return (
    <div className='CardContainer__info' type="hidden">
      <p>
        Compare district stats by clicking on two districts from the list on the left. 
        To change districts click on the districts in the list on the left or remove 
        them individually by clicking on the district card itself.
      </p>
      <button onClick={ () => toggleHelperInfo() }>X</button>
    </div>
  )
};

export default HelperInfo;

HelperInfo.protoTypes = {
  toggleHelperInfo: PropTypes.func
};