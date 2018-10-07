import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineMarkSeries
} from "react-vis"

class Result extends Component {
  constructor(props) {
    super(props)
    this.sorted = this.sortResults(this.props.entry)
    this.state = {
      selected: '',
      class: ''
    }
  }

  sortResults = entry => {
    let stats = Object.entries(entry.stats)
    const graphData = stats.reduce(
      (acc, stat) => [
        ...acc,
        {
          x: stat[0],
          y: stat[1],
          fill: "green"
        }
      ],
      [{ x: stats[0][0] - 1, y: 0 }]
    )

    return graphData
  };

  handleCompare = () => {
    if (this.state.selected) {
      this.props.selectedResults(this.props.entry, false)
      this.setState({
        class: '',
        selected: !this.state.selected
      })
    } else {
      this.props.selectedResults(this.props.entry, true)
      this.setState({
        class: 'selected',
        selected: !this.state.selected
      })
    }

  }

  render() {
    return (
      <article className={`result-card ${this.state.class}`} onClick={this.handleCompare}>
        <h3>{this.props.entry.location}</h3>
        <XYPlot
          width={window.innerWidth * 0.2}
          height={window.innerHeight * 0.2}
        >
          <XAxis />
          <YAxis />
          <HorizontalGridLines animation={({ duration: 2 }, true)} />
          <LineMarkSeries
            data={this.sorted}
            lineStyle={{ stroke: "red" }}
            markStyle={{ stroke: "blue" }}
          />
        </XYPlot>
      </article>
    )
  }
}

export default Result

Result.propTypes = {
  entry: PropTypes.object,
  selectedResults: PropTypes.func
}
