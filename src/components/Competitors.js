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

class Competitors extends Component {
  render() {
    return (
      <React.Fragment>
        <BarchartComponent
          version="158"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Competitor activity"
          width="100%"
        />
        <BarchartComponent
          version="158"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Competitor involvement"
          width="100%"
        />
      </React.Fragment>
    )
  }
}

export default Competitors
