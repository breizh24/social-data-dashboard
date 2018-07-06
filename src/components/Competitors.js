import React, { Component } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import BarchartComponent from './BarchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import ChordchartComponent from './ChordchartComponent'
class Competitors extends Component {
  render() {
    return (
      <React.Fragment>
        <NetworkchartComponent
          version="158"
          category="ma"
          subCategory="network"
          social="twitter"
          indicator="/"
          limit="100"
          title="Competitors Network"
          ref="CompetitorsNetwork"
        />

        <BarchartComponent
          version="158"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Competitor activity"
          width="100%"
          colour1="#C6004A"
          colour2="#6D7AB2"
          classColorRange="activity__color__range"
          classColorCompare="activity__color__compare"
        />
        <BarchartComponent
          version="158"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Competitor involvement"
          width="100%"
          colour1="#78B688"
          colour2="#d786a3"
          classColorRange="involvement__color__range"
          classColorCompare="involvement__color__compare"
        />
        <ChordchartComponent
          ref="ChorChart"
          version="158"
          category="ma"
          subCategory="chord"
          social="twitter"
          indicator="/"
          limit="100"
          title="Competitors chord"
        />
      </React.Fragment>
    )
  }
}

export default Competitors
