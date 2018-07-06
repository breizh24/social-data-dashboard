import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import ChordchartComponent from './ChordchartComponent'
import CompHierarcy from './Competitors_Hierarchy';
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
        <CompHierarcy />
        <BarchartComponent
          version="158"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Competitor activity"
          width="100%"
          colour1="#C6004A"
          colour2="#78B688"
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
          colour1="#6D7AB2"
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
