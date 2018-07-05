import React, { Component } from 'react'
import Hashtags from './Hashtags.js'
import Personality from './Personality.js'
import Competitors from './Competitors.js'
import Accounts from './Accounts.js'
import { Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import NotFound from './NotFound.js'
import BarchartComponent from './BarchartComponent'
import Widget from './Widget.js'
import Home__CustomPieChart from './Home_CustomPieChart'
import Home_Piechart from './Home__PieChart'
import Chord_Account from './Chord_Account'
import Chord_Personality from './Chord_Personality'
import Chord_Competitors from './Chord_Competitors'
import HashNetwork from './HashNetwork'

import Personality_AccountApproval from './Personality_AccountApproval.js'
import Login from './Login'

class Main extends Component {
  handleScrollToElement(event) {
    const tesNode = ReactDOM.findDOMNode(this.refs.test)
    console.log(tesNode)
    // switch (testNode) {
    // case ('AccActy'):
    // window.scrollTo(0, tesNode.offsetTop);
    // break;
    // case ('HashActy'):
    // window.scrollTo(1, tesNode.offsetTop);
    // break;
  }

  render() {
    return (
      <div onScroll={this.handleScrollToElement} className="main__container">
        <Switch>
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="container__home__element">
                <Widget ref="AccActy" width="45%">
                  <Home__CustomPieChart
                    title={'ACCOUNT ACTIVITY'}
                    version="155"
                    category="ma"
                    subCategory="trend"
                    social="twitter"
                    indicator="activity"
                  />
                </Widget>
                <Widget ref="HashActy" width="45%">
                  <Home__CustomPieChart
                    title={'HASHTAG ACTIVITY'}
                    version="156"
                    category="ht"
                    subCategory="trend"
                    social="twitter_hashtag"
                    indicator="activity"
                  />
                </Widget>
                <Chord_Account />
                <Chord_Personality />
                <Chord_Competitors />
              </div>
            )}
          />

          <Route exact path="/hashtags" render={props => <Hashtags />} />

          <Route path="/accounts" render={props => <Accounts />} />

          <Route path="/personality" render={props => <Personality />} />

          <Route path="/competitors" render={props => <Competitors />} />

          <Route render={props => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default Main
