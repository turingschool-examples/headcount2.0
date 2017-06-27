import React, { Component } from 'react';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, Legend,
 XAxis, YAxis, ZAxis, ReferenceLine, ReferenceDot, ReferenceArea, ErrorBar } from 'recharts';


const Graph = ({data}) => {
  const keys = Object.keys(data)
  const dataNorm = keys.reduce((arr, e) => {
    arr.push({
      year: e,
      data: data[e]
    })
    return arr
  }, [])

  return (
      <ScatterChart width={200} height={100} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
        <XAxis dataKey="year" name="year" />
        <YAxis dataKey="data" name="data" />
        <CartesianGrid />
        <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
        <Scatter line shape="square" legendType="square" data={dataNorm} fill="#347300" />
      </ScatterChart>
  )
}


export default Graph;
