import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import LinechartComponent from './LinechartComponent'
import ChordchartComponent from './ChordchartComponent'
import HierarchychartComponent from './HierarchychartComponent'

class Personality extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="links">
          <ChordchartComponent
            id="ChorPers"
            version="160"
            category="ma"
            subCategory="chord"
            social="twitter"
            indicator="/"
            limit="100"
            title="Personality Chord"
            width="50%"
          />
          <NetworkchartComponent
            version="160"
            category="ma"
            subCategory="network"
            social="twitter"
            indicator="/"
            limit="100"
            title="Personality Network"
            width="50%"
            id="NetwPers"
          />
        </div>
        <HierarchychartComponent
          version="160"
          category="ma"
          subCategory="hierarchy"
          social="twitter"
          indicator="/"
          limit="100"
          title="Personality Hierarchy"
          id="HierPers"
        />
        <BarchartComponent
          id="PersActy"
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Personality Activity"
          width="100%"
          colour1="#C6004A"
          colour2="#6D7AB2"
          classColorRange="activity__color__range"
          classColorCompare="activity__color__compare"
        />

        <LinechartComponent
          id="PersApp"
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="approval"
          title="Personality Approval"
          width="100%"
          colour1="#C6004A"
          colour2="#78B688"
          classColorRange="approval__color__range"
        />

        <BarchartComponent
          id="PersInv"
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Personality Involvement"
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
