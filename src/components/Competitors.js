import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import ChordchartComponent from './ChordchartComponent'
import HierarchychartComponent from './HierarchychartComponent'

class Competitors extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="links">
          <ChordchartComponent
            id="ChorComp"
            version="158"
            category="ma"
            subCategory="chord"
            social="twitter"
            indicator="/"
            limit="100"
            title="Competitors Chord"
            width="50%"
          />
          <NetworkchartComponent
            version="158"
            category="ma"
            subCategory="network"
            social="twitter"
            indicator="/"
            limit="100"
            title="Competitors Network"
            id="NetwComp"
            width="50%"
          />
        </div>
        <HierarchychartComponent
          id="CompHier"
          title="Competitors Hierarchy"
          version="158"
          category="ma"
          subCategory="hierarchy"
          social="twitter"
          indicator="/"
          limit="100"
        />
        <BarchartComponent
          id="CompActy"
          version="158"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Competitor Activity"
          width="100%"
          colour1="#C6004A"
          colour2="#6D7AB2"
          classColorRange="activity__color__range"
          classColorCompare="activity__color__compare"
        />
        <BarchartComponent
          id="CompInv"
          version="158"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Competitor Involvement"
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

export default Competitors
