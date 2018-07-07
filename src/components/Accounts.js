import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'
import ChordchartComponent from './ChordchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import HierarchychartComponent from './HierarchychartComponent'

class Accounts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="links">
          <ChordchartComponent
            ref="ChorChart"
            version="155"
            category="ma"
            subCategory="chord"
            social="twitter"
            indicator="/"
            limit="100"
            title="Accounts Chord"
            width="50%"
          />
          <NetworkchartComponent
            version="155"
            category="ma"
            subCategory="network"
            social="twitter"
            indicator="/"
            limit="100"
            title="Accounts Network"
            ref="AccountNetwork"
            width="50%"
          />
        </div>
        <HierarchychartComponent
          title="Account Hierarchy"
          version="155"
          category="ma"
          subCategory="hierarchy"
          social="twitter"
          indicator="/"
          limit="100"
          width="100%"
        />
        <BarchartComponent
          ref="AccActy"
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Account activity"
          width="100%"
          colour1="#C6004A"
          colour2="#6D7AB2"
          classColorRange="activity__color__range"
          classColorCompare="activity__color__compare"
        />
        <BarchartComponent
          ref="Involv"
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Accounts Involvement"
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

export default Accounts
