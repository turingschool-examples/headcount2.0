import React, { Component } from 'react';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, Legend,
 XAxis, YAxis, ZAxis, ReferenceLine, ReferenceDot, ReferenceArea, ErrorBar } from 'recharts';


const Graph = ({data}) => {
  console.log(data);
  const keys = Object.keys(data)
  let dataNorm = []
  let dataNorm2 = []
  if (data.length === 2) {
      dataNorm = Object.keys(data[0].data).map((e, i, arr)=> {
        return {
          year: e,
          data: data[0].data[e],
        }
      })
      dataNorm2 = Object.keys(data[1].data).map((e, i, arr)=> {
        return {
          year: e,
          data: data[1].data[e],
        }
      })



    }
  // const dataNorm = data.reduce((arr, e) => {
  //   arr.push({
  //     year: e,
  //     data1: data[e],
  //     data2: data[e]
  //   });
  //   return arr;
  // }, []);

  return (
      <ScatterChart width={200} height={100} margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
        <XAxis dataKey="year" name="year" />
        <YAxis dataKey="data" name="locationtbd" />
        <CartesianGrid />
        <Tooltip cursor={{ stroke: '#808080', strokeDasharray: '5 5' }}/>
        <Scatter line shape="circle" data={dataNorm} fill="#347300" />
        <Scatter line shape="square" data={dataNorm2} fill="#347300" />
      </ScatterChart>
  )
}


export default Graph;
