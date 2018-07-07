import React, { Component } from 'react'
import Widget from './Widget.js'
import BarchartComponent from './BarchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import HashtagPos_CustomPieChart from './HashtagPos_CustomPieChart'
import HashtagNeg_CustomPieChart from './HashtagNeg_CustomPieChart'
import HierarchychartComponent from './HierarchychartComponent'

class Hashtags extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="links">
          <NetworkchartComponent
            version="158"
            category="ht"
            subCategory="network"
            social="twitter"
            indicator="/"
            limit="100"
            title="Hashtag Network"
            ref="hashtagNetwork"
            width="100%"
          />
        </div>
        <HierarchychartComponent
          title="Hashtag Hierarchy"
          version="158"
          category="ht"
          subCategory="hierarchy"
          social="twitter"
          indicator="/"
          limit="100"
          width="100%"
        />
        <BarchartComponent
          ref="HashActy"
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
          ref="HashInvolv"
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
        {/* <Widget width="95%">
          <HashtagPos_CustomPieChart
            title={'SENTIMENT - POSITIVITY'}
            version="160"
            category="sent"
            subCategory="sentiment"
            social="twitter"
            indicator="positivity"
          />
        </Widget>
        <Widget width="95%">
          <HashtagNeg_CustomPieChart
            title={'SENTIMENT - NEGATIVITY'}
            version="160"
            category="sent"
            subCategory="sentiment"
            social="twitter"
            indicator="negativity"
          />
        </Widget> */}
      </React.Fragment>
    )
  }
}

export default Hashtags
