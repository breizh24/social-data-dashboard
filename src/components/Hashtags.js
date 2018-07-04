import React, { Component } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import Widget from './Widget.js'
import HashNetwork from "./HashNetwork"
import HashtagPos_CustomPieChart from './HashtagPos_CustomPieChart'
import HashtagNeg_CustomPieChart from './HashtagNeg_CustomPieChart'

class Hashtags extends Component {

  render() {
    return (
      <div className="container__home__element">
        <HashNetwork />
        <Widget width="45%">
          <HashtagPos_CustomPieChart
            title={'SENTIMENT - POSITIVITY'}
            version="160"
            category="sent"
            subCategory="sentiment"
            social="twitter"
            indicator="positivity"
          />
        </Widget>
        <Widget width="45%">
          <HashtagNeg_CustomPieChart
            title={'SENTIMENT - NEGATIVITY'}
            version="160"
            category="sent"
            subCategory="sentiment"
            social="twitter"
            indicator="negativity"
          />

        </Widget>
      </div>
    )
  }
}

export default Hashtags
