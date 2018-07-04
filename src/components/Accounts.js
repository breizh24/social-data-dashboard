import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'
import ChordCharts from './Chord__Accounts'


class Accounts extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <React.Fragment>
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
            colour2="#78B688"
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
            title="Account involvement"
            width="100%"
            colour1="#6D7AB2"
            colour2="#d786a3"
            classColorRange="involvement__color__range"
            classColorCompare="involvement__color__compare"
          />
          <ChordCharts
            ref="ChorChart"
          />
        </React.Fragment>
      </div>
=======
      <React.Fragment>
        <BarchartComponent
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Account activity"
          width="100%"
          colour1="#C6004A"
          colour2="#78B688"
          classColorRange="activity__color__range"
          classColorCompare="activity__color__compare"
        />
        <BarchartComponent
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Account involvement"
          width="100%"
          colour1="#6D7AB2"
          colour2="#d786a3"
          classColorRange="involvement__color__range"
          classColorCompare="involvement__color__compare"
        />
        <ChordCharts width="100%" title="Account Chord" />
      </React.Fragment>
>>>>>>> c4184fb6595e290fb3331605478b377cef68e1c4
    )
  }
}

export default Accounts
