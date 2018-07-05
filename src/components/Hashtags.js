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
import HashNetwork from './HashNetwork'
import HashtagPos_CustomPieChart from './HashtagPos_CustomPieChart'
<<<<<<< HEAD
import SimpleRadialBarChart from './HashtagNeg_CustomPieChart2'
=======
import HashtagNeg_CustomPieChart from './HashtagNeg_CustomPieChart'
>>>>>>> 80df8192afc2d2569a4da2c8a6b28082dcca6f54

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
          <HashtagNeg_CustomPieChart2
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

export default SimpleRadialBarChart
