import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis"

class ComparedResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sorted: []
    }

    this.colors = ["#12939A", "#79C7E3", "#1A3177", "#FF9833", '#EF5D28']
  }

  componentDidUpdate(prevProps) {
    if (this.props.dataset !== prevProps.dataset) {
      this.setState({
        sorted: this.sortResults(this.props.dataset)
      })
    }
  }

  sortResults = array => {
    let counter = 0
    const sorted = []
    array.forEach(entry => {
      this.counter++
      let stats = Object.entries(entry.stats)
      const graphData = stats.reduce((acc, stat) => {
        return ([...acc,
          {
            x: stat[0],
            y: stat[1],
            color: this.colors[counter]
          }
        ]
        )
      }, [{ x: stats[0][0] - 1, y: 0, color: this.colors[counter] }])

      sorted.push(graphData)
    })
    return sorted
  };

  drawLines = () => {
    const lines = this.state.sorted.map(line => {
      return (
        <LineSeries data={line} key={line[2].x * Math.random()}/>        
      )
    })
    return lines
  }

  render() {
    if (!this.props.compared) return null
    return (
      <article className="result-card compared-results">
        <XYPlot
          width={window.innerWidth * 0.2}
          height={window.innerHeight * 0.2}
        >
          <XAxis />
          <YAxis />
          <HorizontalGridLines animation={({ duration: 2 }, true)} />
          {this.drawLines()}
        </XYPlot>
      </article>
    )
  }
}

export default ComparedResults

ComparedResults.propTypes = {
  dataset: PropTypes.array,
  compared: PropTypes.bool
}