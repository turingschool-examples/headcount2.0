import React from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)

const Compare = ({ compare }) => {
  
  
  return(
    <div className='compare-container'>
    <LineChart 
    data={compare}
    width="100%"
    min={0} max={1} 
    legend="bottom"
      />
    </div>
  )
}

export default Compare;