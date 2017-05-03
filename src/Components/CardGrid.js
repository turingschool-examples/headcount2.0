/* eslint-disable */
import React from 'react'
import Card from './Card.js'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const CardGrid =({ schools }) => {
  return(
    <div>
      {schools.findAllMatches().map((school, i) =>{
        return(
          <div key = {i} >
             <Card school = {school.location}
                   data = {school.data} />
          </div>
        )
      })}
    </div>
  )
}

export default CardGrid
