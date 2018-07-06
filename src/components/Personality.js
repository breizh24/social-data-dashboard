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
import PersonalityNetwork from './PersonalityNetwork'
import LinechartComponent from './LinechartComponent'

class Personality extends Component {
  render() {
    return (
      <React.Fragment>
        <PersonalityNetwork ref="PersonalityNetwork" />

        <BarchartComponent
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Personality activity"
          width="100%"
          colour1="#C6004A"
          colour2="#6D7AB2"
          classColorRange="activity__color__range"
          classColorCompare="activity__color__compare"
        />

        <LinechartComponent
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="approval"
          title="Personality approval"
          width="100%"
          colour1="#C6004A"
          colour2="#78B688"
          classColorRange="approval__color__range"
        />

        <BarchartComponent
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Personality involvement"
          width="100%"
          colour1="#78B688"
          colour2="#d786a3"
          classColorRange="involvement__color__range"
          classColorCompare="involvement__color__compare"
        />
      </React.Fragment>
    )
  }
}

export default Personality
