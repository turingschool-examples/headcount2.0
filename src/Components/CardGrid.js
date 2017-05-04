/* eslint-disable */
import React from 'react'
import Card from './Card.js'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const CardGrid = ({ schools, searched, cardClick, selected }) => {

  return(
    <section className="card-grid">
      {schools.findAllMatches(searched).map((school, i) =>{
        return(
          <div key = {i} >
             <Card location = {school.location}
                   data = {school.data}
                   schools = {schools}
                   cardClick = {cardClick}
                   id = {i}
                   selected = {selected}/>
          </div>
        )
      })}
    </section>
  )
}

export default CardGrid
