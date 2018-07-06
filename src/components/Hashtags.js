import React, { Component } from 'react'
import Widget from './Widget.js'
import NetworkchartComponent from './NetworkchartComponent'
import HashtagPos_CustomPieChart from './HashtagPos_CustomPieChart'
import HashtagNeg_CustomPieChart from './HashtagNeg_CustomPieChart'
import HashHierarchy from './Hashtag_Hierarchy.js'

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
          />
          <HashHierarchy />
        </div>
        <Widget width="95%">
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
        </Widget>
      </React.Fragment>
    )
  }
}

export default Hashtags
