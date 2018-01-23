import React from 'react';
import Card from '../Card/Card';
import astronomy from '../../images/astronomy.svg';


const CardContainer = ({schoolData}) => {
  const schoolsToRender = Object.keys(schoolData)
    .map(school => <Card schoolData={schoolData[school]} />)

  return (
    <div className="CardContainer">
    {schoolsToRender}
      <div className="bottom-images">
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
        <img src={astronomy} className='school-icon' />
      </div>
    </div>
  )
}

export default CardContainer;