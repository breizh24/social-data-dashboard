import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import HierarchychartComponent from './HierarchychartComponent'

class Hashtags extends Component {
  render() {
    return (
      <React.Fragment>
        <NetworkchartComponent
          version="158"
          category="ht"
          subCategory="network"
          social="twitter"
          indicator="/"
          limit="100"
          title="Hashtag Network"
          id="HashNetw"
          width="100%"
        />

        <HierarchychartComponent
          title="Hashtag Hierarchy"
          version="158"
          category="ht"
          subCategory="hierarchy"
          social="twitter"
          indicator="/"
          limit="100"
          width="100%"
          id="HashHier"
        />
        <BarchartComponent
          id="HashAct"
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Hashtag Activity"
          width="100%"
          colour1="#C6004A"
          colour2="#6D7AB2"
          classColorRange="activity__color__range"
          classColorCompare="activity__color__compare"
        />
        <BarchartComponent
          id="HashInv"
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Hashtag Involvement"
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

export default Hashtags
