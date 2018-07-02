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

class Personalita extends Component {
  render() {
    return (
      <React.Fragment>
        <BarchartComponent
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Personality activity"
          width="100%"
        />
        <p>Qui andrà un linechart</p>
        <BarchartComponent
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Personality involvement"
          width="100%"
        />
      </React.Fragment>
    )
  }
}

export default Personalita
