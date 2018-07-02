import React, { Component } from 'react'
import BarchartComponent from './BarchartComponent'

class Accounts extends Component {
  render() {
    return (
      <React.Fragment>
        <BarchartComponent
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="activity"
          title="Account activity"
          width="100%"
        />
        <BarchartComponent
          version="155"
          category="ma"
          subCategory="trend"
          social="twitter"
          indicator="involvement"
          title="Account involvement"
          width="100%"
        />
      </React.Fragment>
    )
  }
}

export default Accounts
