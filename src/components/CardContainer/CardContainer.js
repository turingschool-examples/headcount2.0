import React from 'react';
import Card from '../Card/Card';
import astronomy from '../../images/astronomy.svg';
import './CardContainer.css'


const CardContainer = ({schoolData}) => {
  const schoolsToRender = Object.keys(schoolData)
    .map((school, index) => <Card key={index}
                                  schoolData={schoolData[school]} 
                            />)

  return (
    <div className="CardContainer">
    {schoolsToRender}
      <div className="bottom-images">
        <img src={astronomy} className='school-icon' />
      </div>
    </div>
  )
}

export default CardContainer;