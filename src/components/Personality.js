import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'
import NetworkchartComponent from './NetworkchartComponent'
import LinechartComponent from './LinechartComponent'
import ChordchartComponent from './ChordchartComponent'
import PersHierarcy from './Personality_Hierarchy';

class Personality extends Component {
  render() {
    return (
      <React.Fragment>
        <NetworkchartComponent
          version="160"
          category="ma"
          subCategory="network"
          social="twitter"
          indicator="/"
          limit="100"
          title="Personality Network"
          ref="PersonalityNetwork"
        />
        <PersHierarcy />
        <BarchartComponent
          version="160"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Personality activity"
          width="100%"
          colour1="#C6004A"
          colour2="#78B688"
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
          colour1="#6D7AB2"
          colour2="#d786a3"
          classColorRange="involvement__color__range"
          classColorCompare="involvement__color__compare"
        />
        <ChordchartComponent
          ref="ChorChart"
          version="160"
          category="ma"
          subCategory="chord"
          social="twitter"
          indicator="/"
          limit="100"
          title="Personality Chord"
        />
      </React.Fragment>
    )
  }
}

export default Personality
