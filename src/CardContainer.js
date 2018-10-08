import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';


const CardContainer = ({ data, handleCompare }) => {

  // let makeCards = () => {
  //   props.data.map(point => {
  //     return <Data school={point} />
  //   })
  // }
  let schools = Object.keys(data);
  let counter = 0;

  let cards = (
    schools.map(point =>
      <Card {...data[point]} 
        className={'card' + [point]} key={counter++} 
        handleCompare={ handleCompare } />
    ));


  return (
    <div className='card-container'>
      { cards }
    </div>
  );
    
  
};

CardContainer.propTypes = {

  data: PropTypes.array.isRequired,
  handleCompare: PropTypes.func
};

export default CardContainer;