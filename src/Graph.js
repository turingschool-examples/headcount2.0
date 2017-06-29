import React, { Component } from 'react';
import { LineChart, Line, ScatterChart, Scatter, CartesianGrid, Tooltip, Legend,
 XAxis, YAxis, ZAxis, ReferenceLine, ReferenceDot, ReferenceArea, ErrorBar } from 'recharts';


const Graph = ({data}) => {
  console.log(data);
  const keys = Object.keys(data)
  let dataNorm = []
  let dataNorm2 = []
  if (data.length === 2) {
    dataNorm = Object.keys(data[0].data).map((e, i, arr)=> {
      return {
        year: parseInt(e),
        data: data[0].data[e],
      }
    })
    dataNorm2 = Object.keys(data[1].data).map((e, i, arr)=> {
      return {
        year: parseInt(e),
        data: data[1].data[e],
      }
    })
  }

  return (
    <ScatterChart width={500} height={300} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
      <XAxis type="number" dataKey="year" domain={['dataMin', 'dataMax']} name="year" unit="year" />
      <YAxis dataKey="data" name="weight" unit="kg" />
      <CartesianGrid />
      <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
      <Legend/>
      <Scatter line lineJointType="monotoneX" shape="circle" legendType="circle" data={dataNorm2} fill="#ff7300" />
      <Scatter line shape="square" legendType="square" data={dataNorm} fill="#347300" />
    </ScatterChart>
  );
}


export default Graph;
