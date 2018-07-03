import React, { Component } from 'react'
import Hashtags from './Hashtags.js'
import Personalita from './Personalita.js'
import Competitors from './Competitors.js'
import Accounts from './Accounts.js'
import { Route, Switch } from 'react-router-dom'
import NotFound from './NotFound.js'
import BarchartComponent from './BarchartComponent'
import Widget from './Widget.js'
import Home__CustomPieChart from './Home_CustomPieChart'
import Home_Piechart from './Home__PieChart'
import ChordCharts from './Chord'

import Personality_AccountApproval from './Personality_AccountApproval.js'
import Login from './Login'
import PersonalityApproval from './PersonalityApproval.js'

class Main extends Component {
  render() {
    return (
      <div className="main__container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="container__home__element">
                <Widget width="45%">
                  <Home__CustomPieChart
                    title={'ACCOUNT ACTIVITY'}
                    version="155"
                    category="ma"
                    subCategory="trend"
                    social="twitter"
                    indicator="activity"
                  />
                </Widget>
                <Widget width="45%">
                  <Home__CustomPieChart
                    title={'HASHTAG ACTIVITY'}
                    version="156"
                    category="ht"
                    subCategory="trend"
                    social="twitter_hashtag"
                    indicator="activity"
                  />
                </Widget>
                <ChordCharts />
              </div>
            )}
          />
          <Route
            exact
            path="/login"
            render={props => <Personality_AccountApproval />}
          />

          <Route exact path="/hashtags" render={props => <Hashtags />} />

          <Route path="/accounts" render={props => <Accounts />} />

          <Route path="/personalita" render={props => <Personalita />} />

          <Route path="/competitors" render={props => <Competitors />} />

          <Route render={props => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default Main
