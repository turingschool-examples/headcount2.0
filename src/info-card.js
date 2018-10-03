import React, { Component } from 'react';
import ReactChartkick, { AreaChart, LineChart, ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

import './info-card.css';

ReactChartkick.addAdapter(Chart)

const Card = ({ data }) => {
  return (
    <div className='info-card'>
      <h4>{data.location}</h4>

      <div className='year-list'>
      {
        Object.keys(data.stats).map( year => {
          if (data.stats[year] > .5) {
            return (
              <p className='hi'>
                {year}: {data.stats[year]} 
                <span className='emoji'>...😁</span>
              </p>
            )
          } else {
            return (
              <p className='low'>
                {year}: {data.stats[year]} 
                <span className='emoji'>...☹️</span>
              </p>
            )
          }
        })
      }
      </div>

    </div>
  )
}

export default Card;
      // <LineChart
      //   data={data.stats}
      // />