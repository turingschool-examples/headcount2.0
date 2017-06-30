import React, { Component } from 'react';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, Legend, XAxis, YAxis } from 'recharts';


export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      height: 300,
      width: 600,
    }
  }

  componentDidMount() {
    const parent = this.refs.graph.parentNode
    const width = parent.clientWidth - 50;
    const height = parent.clientHeight - 150;

    this.setState({
      height,
      width,
    })
  }

  render() {
    const { width, height } = this.state;
    const { data } = this.props;
    let dataNorm = [];
    let dataNorm2 = [];
    if (data.length === 2) {
      dataNorm = Object.keys(data[0].data).map((e, i, arr)=> {
        return {
          year: parseInt(e, 10),
          data: data[0].data[e],
        }
      });
      dataNorm2 = Object.keys(data[1].data).map((e, i, arr)=> {
        return {
          year: parseInt(e, 10),
          data: data[1].data[e],
        }
      });
    }

    return (
      <div ref='graph'>
        <ScatterChart
          width={width}
          height={height}
          margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
          <XAxis type="number"
            dataKey="year"
            domain={['dataMin', 'dataMax']}
            name="year" />
          <YAxis dataKey="data"
            name="data"/>
          <CartesianGrid />
          <Tooltip cursor={
              { stroke: '#808080',
                strokeDasharray: '5 5' }}/>
              <Legend/>
              <Scatter line lineJointType="monotoneX"
                shape="circle"
                legendType="circle"
                data={dataNorm}
                fill="#ff7300" />
              <Scatter line shape="square"
                legendType="square"
                data={dataNorm2}
                fill="#347300" />
            </ScatterChart>

      </div>
    );
  }
}
