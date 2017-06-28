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
    console.log(dataNorm, dataNorm2)
  }

  const data03 = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
  ];

  const data04 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
  ]




  return (
    <ScatterChart width={300} height={200} margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
      <XAxis type="number" dataKey="year" domain={['dataMin', 'dataMax']} name="year" unit="year" />
      <YAxis dataKey="data" name="weight" unit="kg" />
      <CartesianGrid />
      <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
      <Legend/>
      <Scatter line lineJointType="monotoneX" shape="circle" legendType="circle" data={dataNorm2} fill="#ff7300" />
      <Scatter line shape="square" legendType="square" data={dataNorm} fill="#347300" />
    </ScatterChart>
  );



  // return (
  //     <ScatterChart width={200} height={100} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
  //       <XAxis dataKey="year" name="year" />
  //       <YAxis dataKey="data" />
  //       <CartesianGrid />
  //       <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
  //       <Scatter line shape="circle" data={dataNorm} fill="#347300" />
  //       <Scatter line shape="square" data={dataNorm2} fill="#808080" />
  //     </ScatterChart>
  // )
}


export default Graph;
