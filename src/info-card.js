import React, { Component } from 'react';
import ReactChartkick, { AreaChart, LineChart, ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

const Card = ({ data }) => {
  return (
    <div className='info-card'>
      <LineChart


        data={data}

      />
    </div>
  )
}

export default Card;