import * as d3 from 'd3';
import React from 'react';


// Returns the largest X coordinate from the data set
// const xMax = (data)  => d3.max(data, (d) => d[0]);
//
// // Returns the higest Y coordinate from the data set
// const yMax = (data)  => d3.max(data, (d) => d[1]);
//
// // Returns a function that "scales" X coordinates from the data to fit the chart
// const xScale = (props) => {
//   return d3.scale.linear()
//     .domain([0, xMax(props.data)])
//     .range([props.padding, props.width - props.padding * 2]);
// };
//
// // Returns a function that "scales" Y coordinates from the data to fit the chart
// const yScale = (props) => {
//   return d3.scale.linear()
//     .domain([0, yMax(props.data)])
//     .range([props.height - props.padding, props.padding]);
// };
const width = 200;
const height = 100;

const Graph = ({data}) => {
  // const scales = { xScale: xScale(props), yScale: yScale(props) };
  // console.log(props)

  return (
    <div>
      <svg width={width} height={height}>
        <rect width='100%' height='100%' fill='blue'/>
      </svg>
    </div>
  )
}


export default Graph;
